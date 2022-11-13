import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    powerSupply(watts: number) {
        console.log(`Suppliying the worth of ${watts}`)
    }
}
