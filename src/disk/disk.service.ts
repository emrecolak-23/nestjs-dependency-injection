import { Injectable } from '@nestjs/common';

import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {

    constructor(private powerService: PowerService){}

    getData() {
        console.log('Drawing 20 watts of poer from power service')
        this.powerService.powerSupply(20)
        return 'data!'
    }
}
