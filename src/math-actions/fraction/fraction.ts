
export class Fraction {
    numerator: number;
    denominator: number;
    integer: number;
    tags: string[];
    constructor (numerator: number, denominator: number, integer?: number) {
        this.numerator = numerator;
        this.denominator = denominator;
        if (integer) {this.integer = integer;}
        this.getType();
        
    }

    getType () {
        this.tags = [];
        if (this.numerator > this.denominator) {
            this.tags.push('IF')
        }
        if (this.integer) {
            this.tags.push('MN')
        }
    
    }

    cancellation () {
        
    }

}