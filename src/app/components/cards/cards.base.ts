import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class CardsBase {

    constructor(private http:HttpClient) { }

    protected loadContent(content:String){
        return this.http.get('../assets/contents/contents' + (String)(localStorage.getItem('lang') || 'esp') +'.data.json').pipe(
            map((response:any) => {
                return response[`${content}`];
            })
        );
    }
}