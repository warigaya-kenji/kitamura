/*
 *  copyright(c) activecore,Inc. 2005-2019
 * 
 *  This software is licensed by activecore, Inc.
 *  You CAN NOT use this file except in compliance with the License.
 *
 *  Product  : ac propoza
 *  Version  : 7.0 
 *  Rev      : 2
 *  Last Update: 2019/12/06
 *
 *  Modification History
 *  ----------  -----------------------------------------------------
 *  V50-001     item_id.length 32 -> 64
 *  REV01       ITP2.1
 *  REV02       SameSite
 */
var _ac_clip_name = 'ac_clip';
var _max_ac_clip_items = 10;

// ITP2.1
function getLocalStorage(cn) {
   var ac = "";
   try {
      var ua = navigator.userAgent.toLowerCase();
      //if (window.localStorage && ua && ua.indexOf('safari') >= 0) {
      if (window.localStorage) {
         var ac = localStorage.getItem(cn);
         return ac != null ?  new String(ac) : "";
      }   
   } catch (error) {
      // 
   }
   return ac;
}

function setLocalStorage(cn, val) {
   try {
      var ua = navigator.userAgent.toLowerCase();
      //if (window.localStorage && ua && ua.indexOf('safari') >= 0) {
      if (window.localStorage) {
         localStorage.setItem(cn, val);
      }     
   } catch (error) {
      // 
   }
}
// ITP2.1 END

/*
 *	get Cookie 
 */
function _acClipGetCookie(cn) {
   var get_data = document.cookie;
   var cv = new Array();
   var gd = get_data.split(";");
   for (var i = 0; i < gd.length; i++) { 
      var a = gd[i].split("=");
      a[0] = a[0].replace(" ","");
      cv[a[0]] = a[1];
   }
   if (cv[cn]) return cv[cn];
   // else return "";
   else return getLocalStorage(cn); // ITP2.1
}

/*
 *	Set Cookie
 */
function _acClipSetCookie(cn, val) {
   // REV02
   var _secure = '';
   var _proto = location.protocol;
   if (_proto === "https:") {
      _secure = 'Secure'
   }
   document.cookie = cn + "=" + val + "; path=/; expires=Thu, 1-Jan-2030 00:00:00 GMT;" + " SameSite=None; " + _secure;
   setLocalStorage(cn,val) // local storage ITP2.1
}

/*
 *	Set item_id into Cookie
 */
function _ac_item_clip(item_id) {
	if (!item_id) {
		return;
	}
	var pos = -1;
	if ((pos = item_id.indexOf('ac_item_no=')) >= 0) {
		item_id = item_id.substring(pos + 'ac_item_no='.length);
		if (item_id == '') {
			return;
		}
	}
    //if (item_id.length > 32) { V50-001
    if (item_id.length > 64) {
		return;
	}
	_ac_clip(item_id, _ac_clip_name, 'i:');
}

/*
 *	Set contents_id into Cookie
 */
function _ac_contents_clip(contents_id) {
	if (!contents_id) {
		return;
	}
	var pos = -1;
	if ((pos = contents_id.indexOf('contents_id=')) >= 0) {
		contents_id = contents_id.substring(pos + 'contents_id='.length);
		if (contents_id == '') {
			return;
		}
	}
	if (contents_id.length > 64) {
		return;
	}
	_ac_clip(contents_id, _ac_clip_name, 'c:');
}

/*
 *	Set item_id into Cookie
 */
function _ac_clip(item_id, cookieName, prefix) {
	if (!item_id) {
		return;
	}
	var ckval = _acClipGetCookie(cookieName);
	var itemList = null;
	var otherList = '';
	// parse cookie value
	if (ckval != '') {
		var sp = ckval.split("*");
		if (sp.length > 0) {
			for (var i = 0; i < sp.length; i++) {
				if (sp[i].indexOf(prefix) == 0) {
					var sz = sp[i].substring(prefix.length);
					if (sz.length == 0) {
						continue;
					} 
					var sy = sz.split(',');
					if (sy.length > 0) {
						itemList = sy;
					}
				} else {
					otherList += sp[i];
				}
			}
		}
	}	
	// set new cookie value
	var newCkVal = prefix + item_id;
	var newCount = 1;
	if (itemList != null) {
		for (var i = 0; i < itemList.length; i++) {
			if (itemList[i] == item_id) {
				continue;
			}
			if (++newCount > _max_ac_clip_items) {
				break;
			}
			newCkVal += ',' + itemList[i];
		}
	}
	if (otherList != '') {
		newCkVal += '*' + otherList;
	}
	_acClipSetCookie(cookieName, newCkVal);
}
