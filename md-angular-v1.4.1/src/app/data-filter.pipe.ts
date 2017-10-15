import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.nombre.indexOf(query) > -1);
        }

        return array;
    }
    keys = [];
	/*transform(items: any, args: string): any {

		if (items != null && items.length > 0) {
		  let ans = [];

		  if (this.keys.length == 0) {
		    this.keys = Object.keys(items[0]);
		  }

		  for (let i of items) {
		    for (let k of this.keys) {
		      if (i[k].toString().match('^.*' + args +'.*$')) {
		        ans.push(i);
		        break;
		      }
		    }
		  }
		  return ans;
		}
	}*/
}