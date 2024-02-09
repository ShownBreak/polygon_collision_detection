import { Params } from '@/typings';

export default class polygonCD {
  private p: Params;
  private q: Params;
  constructor(p: Params, q: Params) {
    this.p = p;
    this.q = q;

    if (!this.checkParams()) return;
  }

  private checkParams() {
    if (!this.p || !this.q) {
      console.error('params required');
      return false;
    }

    return true;
  }
}
