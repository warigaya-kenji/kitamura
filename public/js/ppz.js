/*
 *  copyright(c) activecore,Inc. 2005-2019
 *
 *  This software is licensed by activecore, Inc.
 *  You CAN NOT use this file except in compliance with the License.
 *
 *  Product  : ac propoza
 *  Version  : 7.0
 *  REV      : 9
 *  Last Update: 2019/12/06
 
 *  Modification History
 *  ----------  -----------------------------------------------------
 *  2010-05-26  REV1 add cat02/cat03
 *  2010-07-15  REV2 add contents_id/seg_id/_contents_click
 *  2010-02-02  REV3 add ac_clip parameter to ppz request
 *  2013-08-13  ppz50-26 add serverToServer parameter
 *  2014-01-15  REV4 add item_filter(s) function ppz50-38
 *  2014-03-12  REV5 add attr_filter(s) function ppz50-43
 *  2015-07-03  REV6 add min_item_price/max_item_price ppz60-14
 *  2016-08-14  REV6 add using_dmp ppz60-36
 *  2017-09-17  REV7 add exclude_view_history
 *  2019-03-10  REV8 ITP2.1
 *  2019-12-06  REV9 SameSite
 */

// ITP2.1 START
function getLocalStorage(cn) {
   var ac = "";
   try {
      var ua = navigator.userAgent.toLowerCase();
      // if (window.localStorage && ua && ua.indexOf('safari') >= 0) {
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
      // if (window.localStorage && ua && ua.indexOf('safari') >= 0) {
      if (window.localStorage) {
         localStorage.setItem(cn, val);
      }     
   } catch (error) {
      // 
   }
}
// ITP2.1 END

function _PPZ_encode(str){
    var s0, i, s, u;
    s0 = "";                
    for (i = 0; i < str.length; i++){  
        s = str.charAt(i);
        u = str.charCodeAt(i);          
        if (s == " "){s0 += "+";}    
        else {
            if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f 
                || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) 
                || ((u >= 0x61) && (u <= 0x7a))){   
                s0 = s0 + s;            
            }
            else {                  
                if ((u >= 0x0) && (u <= 0x7f)){     
                    s = "0"+u.toString(16);
                    s0 += "%"+ s.substr(s.length-2);
                }
                else if (u > 0x1fffff){     
                    s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else if (u > 0x7ff){        
                    s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else {                     
                    s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
            }
        }
    }
    return s0;
}

function _PPZ() {
   
   this.ppz_host='ppz31.a-cast.jp';
   this.auth='Dkcrmo5PAi9sy';
   this.api_pw='iJNDX-8u3oyUU';
   this.charset='utf-8';
   
   this.ac='';
   this.cid=0;
   this.rid=0;
   this.level='1';
   this.price='y';
   this.stock='n';
   this.point='n';
   this.type='p';
   this.div_id = '';
   this.rows=10;
   this.item_id='';
   this.cat='';
   this.cat2='';
   this.cat3='';
   this.format='json';
   this.expire_time=3600;
   this.cb='ppz_draw';
   this.ref='';
   this.customer_id='';
   this.exclude_order_history='';
   this.exclude_view_history=''; // REV07
   this.alt_html=null;
   this.clickProcess=false;
   this.timeout=10*1000;
   this.click_interval=500;
   
   // this.c_contents_id='';
   this.c_item_id='';   
   this.c_name='';
   this.c_cat01='';
   this.c_status='';
   this.c_sales_date='';
   this.c_title=''; 
   this.c_desc='';
   this.c_image_url='';
   this.c_image_alt='';
   this.c_link_url='';
   this.c_cart_url='';  
   this.c_price='';
   this.c_real_price='';
   this.c_stock_cnt='';
   this.c_point=''; 
   this.c_point_rate='';
   
   this.contents_id='';
   this.seg_id='';
   this.serverToServer=''; // ppz50-26
 
   /* REV04 ppz50-38 START */
   this.v01 = '';
   this.v02 = '';
   this.v03 = '';
   this.v04 = '';
   this.v05 = '';
   this.v06 = '';
   this.v07 = '';
   this.v08 = '';
   this.v09 = '';
   this.v10 = '';
   this.v11 = '';
   this.v12 = '';
   this.v13 = '';
   this.v14 = '';
   this.v15 = '';
   this.v01_cri = '';
   this.v02_cri = '';
   this.v03_cri = '';
   this.v04_cri = '';
   this.v05_cri = '';
   this.v06_cri = '';
   this.v07_cri = '';
   this.v08_cri = '';
   this.v09_cri = '';
   this.v10_cri = '';
   this.v11_cri = '';
   this.v12_cri = '';
   this.v13_cri = '';
   this.v14_cri = '';
   this.v15_cri = '';
   this.v01_oper = '';
   this.v02_oper = '';
   this.v03_oper = '';
   this.v04_oper = '';
   this.v05_oper = '';
   this.v06_oper = '';
   this.v07_oper = '';
   this.v08_oper = '';
   this.v09_oper = '';
   this.v10_oper = '';
   this.v11_oper = '';
   this.v12_oper = '';
   this.v13_oper = '';
   this.v14_oper = '';
   this.v15_oper = '';
   this.voper = '';
   this.item_price_percent = 0;
   this.item_price_percent_high = 0;
   this.item_price_percent_low = 0;
   this.using_item_filter = '';
   this.item_cat01_filter=''; // ppz50-58
   this.min_item_price = 0; // ppz60-14
   this.max_item_price = 0; // ppz60-14
   /* ppz50-38 END */
   
   /* REV5 ppz50-43*/
   this.sex='';
   this.age='';
   this.atrr01='';
   this.atrr02='';
   this.atrr03='';
   this.atrr04='';
   this.atrr05='';
   /* ppz50-43 END */
   
   this.using_dmp = 'n'; // ppz60-36
   
}

_PPZ.prototype = {

   _getCookie: function() {
      var cn =  arguments[0];
      var get_data = document.cookie;
      var cv = new Array();
      var gd = get_data.split(";");
      var i;
      for (i = 0; i < gd.length; i++) { 
         var a = gd[i].split("=");
         a[0] = a[0].replace(" ","");
         cv[a[0]] = a[1];
      }
      if (cv[cn]) return cv[cn];
      // else return "";
      else return getLocalStorage(cn); // ITP2.1
   }
   ,
   _setCookie: function() {
      var cn = arguments[0];
      var val = arguments[1];
      // REV9
      var _secure = '';
      var _proto = location.protocol;
      if (_proto === "https:") {
         _secure = 'Secure'
      }
      document.cookie = cn + "=" + val + "; path=/; expires=Thu, 1-Jan-2030 00:00:00 GMT;" + " SameSite=None; " + _secure;
      setLocalStorage(cn, val) // local storage ITP2.1
   }
   ,
   _fillZero: function() {
      var digits = 5;
      var s = arguments[0];
      if (s == null || s == undefined) {
         return s;
      }
      return Array((digits + 1) - s.toString().split('').length).join('0') + s;
   }
   ,
   _click: function() {
      var _now = new Date();
      var _linkUrl = arguments[0];
      var _proto = 'http:';
      if (window.location.protocol == 'https:') {
         _proto = 'https:';
      }  
      var _dir = '/c' + this._fillZero(this.cid);
      var _img = new Image();
      _img.src = _proto + '//' + this.ppz_host + _dir + '/click.gif?' 
              + 'cid=' + this.cid  
              + '&rid=' + this.rid 
              + '&item_id=' + arguments[1] 
              + '&host=' + escape(window.location)
              + '&ac=' + this.ac
              + '&type=' + this.type
              + '&auth=' + this.auth    
              + '&rand=' + Math.round(Math.random() * _now.getTime())
              ;
       // alert(_img.src);       
       var _isError = false;
       var _isOnload = false;       
       _img.onerror = function(){ 
          _isError = true; 
       };
       _img.onload = function(){ 
          _isOnload = true; 
       };
       if (_img.complete == true) {
          location.href = _linkUrl;
          return;
       }
       var _timerId = setInterval(function(){
          if (_img.complete == true || _isOnload == true || _isError == true) {
             clearInterval(_timerId);
             location.href = _linkUrl;
          }
       },this.click_interval);
       
       return;
   }
   ,
     _contents_click: function() {
      var _now = new Date();
      var _linkUrl = arguments[0];
      var _proto = 'http:';
      if (window.location.protocol == 'https:') {
         _proto = 'https:';
      }  
      var _dir = '/c' + this._fillZero(this.cid);
      var _img = new Image();
      _img.src = _proto + '//' + this.ppz_host + _dir + '/click.gif?' 
              + 'cid=' + this.cid  
              + '&rid=' + this.rid 
              + '&contents_id=' + arguments[1] 
              + '&host=' + escape(window.location)
              + '&ac=' + this.ac
              + '&type=' + this.type
              + '&auth=' + this.auth    
              + '&rand=' + Math.round(Math.random() * _now.getTime())
              ;
       // alert(_img.src);       
       var _isError = false;
       var _isOnload = false;       
       _img.onerror = function(){ 
          _isError = true; 
       };
       _img.onload = function(){ 
          _isOnload = true; 
       };
       if (_img.complete == true) {
          location.href = _linkUrl;
          return;
       }
       var _timerId = setInterval(function(){
          if (_img.complete == true || _isOnload == true || _isError == true) {
             clearInterval(_timerId);
             location.href = _linkUrl;
          }
       },this.click_interval);
       
       return;
   }
   
}

_PPZ.prototype.timeoutHandler = function() {
   // alert(this.timerId);
   clearInterval(this.timerId);
   var _id = document.getElementById("PPZ_RID" + this.rid);
   if (_id == null) {
     var _div = document.getElementById(this.div_id);
     if (_div != null && this.alt_html != null) {
        _div.innerHTML = this.alt_html;
     }
   }
}


_PPZ.prototype.request = function() {
   
   var _now = new Date();
   if (this.ac == '') {
      this.ac = this._getCookie('ac');
   }
   // var _ac_ppz = this._getCookie('ac_ppz');
   var _proto = 'http:';
   if (window.location.protocol == 'https:') {
      _proto = 'https:';
   }  
   var _src_proto = 's' + 'rc="' + _proto;
   var _dir = '/c' + this._fillZero(this.cid);
   var _ua = navigator.userAgent;
   if (_ua == '') { _ua = 'N/A'; } else { _ua = escape(_ua); }
   
   var ref=escape(document.referrer);
   try {
       if( parent != self ){
          ref=escape(top.document.referrer);
       }
   } catch(e) {
       // this.ref = escape(document.referrer);
   }
   
   var _rid = this.rid;
   var _div_id = this.div_id;
   var _alt_html = this.alt_html
   var _timerId = setInterval(function(){
          clearInterval(_timerId);
          var _id = document.getElementById("PPZ_RID" + _rid);
          if (_id == null) {
             var _div = document.getElementById(_div_id);
             if (_div != null && _alt_html != null) {
                _div.innerHTML = _alt_html;
             }
          }
   },this.timeout);
   
   var _c_items = '';
   //if ((this.c_contents_id != '' && this.c_contents_id != undefined) || (this.c_item_id != '' && this.c_item_id != undefined)) {
   //   _c_items += '&c_contents_id=' + this.c_contents_id;
   if (this.c_item_id != '' && this.c_item_id != undefined) {
      _c_items += '&';
      _c_items += _PPZ_makeParamValue('c_item_id', this.c_item_id);
      _c_items += _PPZ_makeParamValue('c_name', this.c_name);
      _c_items += _PPZ_makeParamValue('c_cat01', this.c_cat01);
      _c_items += _PPZ_makeParamValue('c_status', this.c_status);
      _c_items += _PPZ_makeParamValue('c_sales_date', this.c_sales_date);
      _c_items += _PPZ_makeParamValue('c_title', this.c_title);
      _c_items += _PPZ_makeParamValue('c_desc', this.c_desc);
      _c_items += _PPZ_makeParamValue('c_image_url', this.c_image_url);
      _c_items += _PPZ_makeParamValue('c_image_alt', this.c_image_alt);
      _c_items += _PPZ_makeParamValue('c_link_url', this.c_link_url);
      _c_items += _PPZ_makeParamValue('c_cart_url', this.c_cart_url);
      _c_items += _PPZ_makeParamValue('c_price', this.c_price);
      _c_items += _PPZ_makeParamValue('c_real_price', this.c_real_price);
      _c_items += _PPZ_makeParamValue('c_stock_cnt', this.c_stock_cnt);
      _c_items += _PPZ_makeParamValue('c_point', this.c_point);
      _c_items += _PPZ_makeParamValue('c_point_rate', this.c_point_rate);
   }
   
   // ppz50-38
   var _item_filters = '';
   _item_filters += _PPZ_makeParamValue('v01', this.v01);
   _item_filters += _PPZ_makeParamValue('v02', this.v02);
   _item_filters += _PPZ_makeParamValue('v03', this.v03);
   _item_filters += _PPZ_makeParamValue('v04', this.v04);
   _item_filters += _PPZ_makeParamValue('v05', this.v05);
   _item_filters += _PPZ_makeParamValue('v06', this.v06);
   _item_filters += _PPZ_makeParamValue('v07', this.v07);
   _item_filters += _PPZ_makeParamValue('v08', this.v08);
   _item_filters += _PPZ_makeParamValue('v09', this.v09);
   _item_filters += _PPZ_makeParamValue('v10', this.v10);
   _item_filters += _PPZ_makeParamValue('v11', this.v11);
   _item_filters += _PPZ_makeParamValue('v12', this.v12);
   _item_filters += _PPZ_makeParamValue('v13', this.v13);
   _item_filters += _PPZ_makeParamValue('v14', this.v14);
   _item_filters += _PPZ_makeParamValue('v15', this.v15);

   _item_filters += _PPZ_makeParamValue('v01_cri', this.v01_cri);
   _item_filters += _PPZ_makeParamValue('v02_cri', this.v02_cri);
   _item_filters += _PPZ_makeParamValue('v03_cri', this.v03_cri);
   _item_filters += _PPZ_makeParamValue('v04_cri', this.v04_cri);
   _item_filters += _PPZ_makeParamValue('v05_cri', this.v05_cri);
   _item_filters += _PPZ_makeParamValue('v06_cri', this.v06_cri);
   _item_filters += _PPZ_makeParamValue('v07_cri', this.v07_cri);
   _item_filters += _PPZ_makeParamValue('v08_cri', this.v08_cri);
   _item_filters += _PPZ_makeParamValue('v09_cri', this.v09_cri);
   _item_filters += _PPZ_makeParamValue('v10_cri', this.v10_cri);
   _item_filters += _PPZ_makeParamValue('v11_cri', this.v11_cri);
   _item_filters += _PPZ_makeParamValue('v12_cri', this.v12_cri);
   _item_filters += _PPZ_makeParamValue('v13_cri', this.v13_cri);
   _item_filters += _PPZ_makeParamValue('v14_cri', this.v14_cri);
   _item_filters += _PPZ_makeParamValue('v15_cri', this.v15_cri);
   
   _item_filters += _PPZ_makeParamValue('v01_oper', this.v01_oper);
   _item_filters += _PPZ_makeParamValue('v02_oper', this.v02_oper);
   _item_filters += _PPZ_makeParamValue('v03_oper', this.v03_oper);
   _item_filters += _PPZ_makeParamValue('v04_oper', this.v04_oper);
   _item_filters += _PPZ_makeParamValue('v05_oper', this.v05_oper);
   _item_filters += _PPZ_makeParamValue('v06_oper', this.v06_oper);
   _item_filters += _PPZ_makeParamValue('v07_oper', this.v07_oper);
   _item_filters += _PPZ_makeParamValue('v08_oper', this.v08_oper);
   _item_filters += _PPZ_makeParamValue('v08_oper', this.v09_oper);
   _item_filters += _PPZ_makeParamValue('v10_oper', this.v10_oper);
   _item_filters += _PPZ_makeParamValue('v11_oper', this.v11_oper);
   _item_filters += _PPZ_makeParamValue('v12_oper', this.v12_oper);
   _item_filters += _PPZ_makeParamValue('v13_oper', this.v13_oper);
   _item_filters += _PPZ_makeParamValue('v14_oper', this.v14_oper);
   _item_filters += _PPZ_makeParamValue('v15_oper', this.v15_oper);
   
   _item_filters += _PPZ_makeParamValue('voper', this.voper);
   _item_filters += _PPZ_makeParamIntValue('min_item_price', this.min_item_price); // ppz60-14
   _item_filters += _PPZ_makeParamIntValue('max_item_price', this.max_item_price); // ppz60-14
   _item_filters += _PPZ_makeParamIntValue('item_price_percent', this.item_price_percent);
   _item_filters += _PPZ_makeParamIntValue('item_price_percent_low', this.item_price_percent_low);
   _item_filters += _PPZ_makeParamIntValue('item_price_percent_high', this.item_price_percent_high);
   _item_filters += _PPZ_makeParamValue('using_item_filter', this.using_item_filter);
   _item_filters += _PPZ_makeParamValue('item_cat01_filter', this.item_cat01_filter); // ppz50-58
   _item_filters += _PPZ_makeParamValue('using_dmp', this.using_dmp); // REV6 ppz60-36
   
   // REV5 ppz50-43
   var _attr_filters = '';
   _attr_filters += _PPZ_makeParamValue('age', this.age);
   _attr_filters += _PPZ_makeParamValue('sex', this.sex);
   _attr_filters += _PPZ_makeParamValue('attr01', this.attr01);
   _attr_filters += _PPZ_makeParamValue('attr02', this.attr02);
   _attr_filters += _PPZ_makeParamValue('attr03', this.attr03);
   _attr_filters += _PPZ_makeParamValue('attr04', this.attr04);
   _attr_filters += _PPZ_makeParamValue('attr05', this.attr05);

   // REV3
   var _clip = this._getCookie('ac_clip');  
//   var _url = '<scr' + 'ipt type="text/jav' + 'ascript" ' 
//      + 'language="JavaScript" ' + _src_proto + '//' + this.ppz_host + _dir + '/query?'
   var _url = _proto + '//' + this.ppz_host + _dir + '/query?'
      + 'cid=' + this.cid
      + '&charset=' + this.charset
      + '&rid=' + this.rid
      + '&rows=' + this.rows
      + '&host=' + escape(window.location)
      + '&item_id=' + this.item_id
      + '&contents_id=' + _PPZ_encode(this.contents_id) 
      + '&seg_id=' + this.seg_id
      + '&cat=' + this.cat
      + '&cat2=' + this.cat2
      + '&cat3=' + this.cat3
      + '&type=' + this.type
      + '&cb=' + this.cb
      + '&ac=' + this.ac
      + '&format=' + this.format
      + '&expire_time=' + this.expire_time
      + '&ua=' + _ua
      + '&level=' + this.level
      + '&price=' + this.price
      + '&stock=' + this.stock
      + '&point=' + this.point
      + '&div_id=' + this.div_id
      + '&auth=' + this.auth
      + '&timer_id=' + _timerId
      + '&customer_id=' + this.customer_id
      + '&exclude_order_history=' + this.exclude_order_history
      + '&exclude_view_history=' + this.exclude_view_history // REV07
      + '&referrer=' + ref
      + _c_items
      + _item_filters // ppz50-38
      + _attr_filters // ppz50-43
      + '&api_pw=' + this.api_pw
      + '&ac_clip=' + _clip // REV3
      + '&s=' + this.serverToServer // ppz50-26
      + '&rand=' + Math.round(Math.random() * _now.getTime())
    //  + '"></' + 'scr' + 'ipt>' 
      ;
     
     var _ac = document.createElement('script'); 
     _ac.type = 'text/javascript'; 
     _ac.async = true;
     _ac.src = _url;
     
    if (_proto == 'http:' || _proto == 'https:') { 
      var _tag = document.getElementsByTagName('script')[0];
      _tag.parentNode.insertBefore(_ac, _tag);
    }  
    return 0;
}

function _PPZ_makeParamValue(name, value) {
    if (value == '' || value == undefined) {
        return '';
    }
    return '&' + name + '=' + _PPZ_encode(value);
}

// ppz50-38
function _PPZ_makeParamIntValue(name, value) {
    if (value == 0 || value == undefined) {
        return '';
    }
     return '&' + name + '=' + value; // ppz60-14 _PPZ_encode(value);
}

function _PPZ_formatPrice(_str) {
   var _num = new String(_str).replace(/,/g, "");
   while(_num != (_num = _num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
   return _num;
}

