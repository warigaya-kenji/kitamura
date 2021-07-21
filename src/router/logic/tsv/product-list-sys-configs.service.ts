import { NewerCategory, UsedCategory, ConditionTsv, DisplayPrice } from '@/types/tsv-config';
import { Condition } from '@/types/conditions';
import TsvConfigService from './tsv-config.service';

/**
 * 条件のタイプを変換
 * @param list 変換対象
 */
const _convertConditionType = (list: ConditionTsv[]): Condition[] => {
  const convertList = [] as Array<Condition>;
  list.forEach((cond) => {
    convertList.push({
      paramCode: cond.paramCode,
      name: cond.name,
      sort: +cond.sort,
      isDisplayLogin: cond.isDisplayLogin === 'true',
      isDisplayLogout: cond.isDisplayLogout === 'true',
      isConvert: cond.isConvert === 'true',
      isSortWithCount: cond.isSortWithCount === 'true'
    });
  });
  return convertList;
};

const ProductListSysConfigsService = {
  async fetchNewerCategories(): Promise<NewerCategory[]> {
    const path = `list_sys/category.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  async fetchUsedCategories(): Promise<UsedCategory[]> {
    const path = `list_sys/chuko_category.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  async fetchNewerConditions(): Promise<Condition[]> {
    const path = `list_sys/search_param.tsv`;
    let response = await TsvConfigService.getTsv(path);
    response = _convertConditionType(response);
    return response;
  },

  async fetchUsedConditions(): Promise<Condition[]> {
    const path = `list_sys/chuko_search_param.tsv`;
    let response = await TsvConfigService.getTsv(path);
    response = _convertConditionType(response);
    return response;
  },

  async fetchNewerDisplayPrice(): Promise<DisplayPrice[]> {
    const path = `list_sys/price_range.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  async fetchUsedDisplayPrice(): Promise<DisplayPrice[]> {
    const path = `list_sys/chuko_price_range.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  }
};

export default ProductListSysConfigsService;
