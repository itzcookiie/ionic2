import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userItems: UserItem[] = []

  public async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const responseData = await response.json()
    const firstHundredItems = responseData.slice(0, 51)
                                                        .map(item => this.userItems.push(item))
    return responseData 
  }
}

interface UserItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}



