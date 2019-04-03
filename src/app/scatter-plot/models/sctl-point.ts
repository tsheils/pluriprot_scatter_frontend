import {ScatterPoint} from "./scatter-point";

export class SCTLPoint implements ScatterPoint {
  /**
   * optional point name
   */
  name?: string;

  /**
   * optional point label
   */
  label?: string;

  /**
   * optional variable to toggle hovering class
   */
  hovered?: boolean;

  /**
   * point key
   */
  x: number;

  /**
   * point value
   */
  y: number;


  ratio: number;

  pvalue: number;

  /**
   * string color name
   */
  color: string;


  constructor(data: any){
    Object.entries((data)).forEach((prop) => this[prop[0]] = prop[1]);
  }
}

