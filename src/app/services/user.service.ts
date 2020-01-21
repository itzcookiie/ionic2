import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userItems = []
  public displayedItem

  public async fetchData() {
    const response = await fetch('http://www.json-generator.com/api/json/get/bOjYXEnnci?indent=2')
    const responseJSON = await response.json()
    const responseData = responseJSON.map(item => {
      const { about } = item 
      const segmentedAbout:string = about.slice(0, 100) + '...'
      this.userItems.push({...item, segmentedAbout})
    })
    return responseData 
  }

  public getItem(id) {
    console.log(typeof id, 'id please') 
    console.log(this.userItems.filter((item,index) => index === id))
    return this.userItems.filter((item,index) => index === id) 
  }
}





