import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataParserService} from './services/data-parser.service';
import {ScatterOptions} from './scatter-plot/models/scatter-options';
import {ScatterPlotComponent} from './scatter-plot/scatter-plot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('scatterInstance') scatterInstance: ScatterPlotComponent;

  scatterData: any;
  filters: string[] = ['gray', 'blue', 'green', 'red'];
  chartOptions: ScatterOptions = new ScatterOptions({
    line: false,
    xLabel: 'hESC_Ln_NSAF',
    yLabel: 'hNSC_Ln_NSAF'
  });


  constructor(
    private dataParserService: DataParserService
  ) {}

  ngOnInit() {
    this.dataParserService.loadData().then(data => {
      this.scatterData = data;
    });
  }

  reset() {
    this.scatterInstance.reset();
  }

  filterData(event: any) {
    this.filters = event;
  }
}
