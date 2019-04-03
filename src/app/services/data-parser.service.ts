
import * as d3 from 'd3';
import {SCTLPoint} from '../scatter-plot/models/sctl-point';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {

  dataMap: Map<string, any> = new Map<string, any>();

  constructor() { }

  loadData(): any {
const dataMap: Map<string, SCTLPoint[]> = new Map<string, SCTLPoint[]>();
   return d3.dsv(',', './assets/data/pluriprot-shiny.csv', function(d) {
      return new SCTLPoint({
        name: d.Symbol,
      label: d.Symbol,
      x: parseFloat(d.hESC_Ln_NSAF),
      y: parseFloat(d.hNSC_Ln_NSAF),
        ratio: Number(d.NSAF_SpC_ratio).toFixed(3),
       pvalue: d.t_test_p,
        color: d.color
      });
    }).then(function(data) {
      data.map(point => {
        const points: SCTLPoint[] = dataMap.get(point.color);
        if (points) {
          points.push(point);
          dataMap.set(point.color, points);
        } else {
          dataMap.set(point.color, [point]);
        }
        }
      )
      return dataMap;
    });
  }

  fetchData() {}
}
