"use strict";
var data = {
  "_id": "xu89dj1",
  "type": "event",
  "name": "Node.js Meetup Berlin",
  "roles": [
    "id:301475d3-2397-4ecf-b71b-e8244412a7df"
  ],
  "content": "Talk #1: Job Queues, Deployment and Sandboxing Tim will share insights and give practical examples of architectural and code issues he ran into while building his SaaS tool Checkly (https://checklyhq.com). \n\r Talk #2: Debugging & Performance Analysis in Node.js Dominic Umbeer will share some approaches to keep track of system performance and tools for debugging and performance analysis, such as node-inspect, Chrome DevTools & New Relic. Always track performance after significant internal code changes! :) \n\r ----- \n\r JOBS NOTICE: If you're looking for an exciting new tech job or you're looking to hire great devs, please use www.upandfront.com (https://www.upandfront.com/?nmbj0118). It's a 100% dev-run agency and they help us keep the meetups about code only. Register in under half a minute!",
  "organizer": {
    "clearname": "Karyn Fletcher",
    "img": "https://www.aiche.org/sites/default/files/styles/ache_portrait_no-up-scale_nocrop/public/images/bio/karen_fletcher_hirez.jpg?itok=bxyeD577",
    "birthdate": "1994-06-06",
    "city": "Montreal",
    "zip": "90029",
    "admin": true,
    "street": "Pumpkin street",
    "joined": "2018-01-12T13:57:31.352Z"
  },
  "meta": {
    "day": "30",
    "month": "jan",
    "location": {
      "street": "Ritterstraße 12",
      "zip": "10203",
      "city": "Berlin",
    },
  },
  "attendees": {
    "c24ffb50-a171-4a09-b283-387e486e361c": {
      "name": "Hildegard Schneider",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"
    },
    "c24ffb70-a171-4a09-b283-387e486e361c": {
      "name": "Hans Zimmer",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"
    },
    "c24ffb1-a171-4a09-b283-387e486e361c": {
      "name": "Sebastian Keider",
      "role": "organizer",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24f8b50-a171-4a09-b283-387e486e361c": {
      "name": "Carolyn",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24f0b50-a171-4a09-b283-387e486e361c": {
      "name": "Olga",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24fsb50-a171-4a09-b283-387e486e361c": {
      "name": "Richard",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24fob50-a171-4a09-b283-387e486e361c": {
      "name": "Alexander",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24fib50-a171-4a09-b283-387e486e361c": {
      "name": "Amber",
      "role": "member",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
    "c24fab50-a171-4a09-b283-387e486e361c": {
      "name": "Sebastian Keider",
      "role": "organizer",
      "image": "https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"

    },
  } 
}




class ViewLayer {
  constructor() {
    this.elements = {
      'more': document.getElementById('more'),
      'preview': document.querySelector('.preview'),
      'aList': document.getElementById('attendees-list'),
      'date': document.getElementById('date'),
      'img': document.getElementById('avatar'),
      'event' : document.querySelector('.media-body > h3 > small'),
      'details' : document.querySelector('.media-body > h3 > span'),
      'newContentText' : document.getElementById('#newContentText'),  // new text
      'host' : document.querySelector('.list-unstyled > li'),
      'from' : document.getElementById('from'),
      'people' : document.querySelector('.col-md-4 > span > span'),
      'location' : document.getElementById('location'),
      'searchBar': document.getElementById('searchBar'),
      'searchButton': document.getElementById('search-button'),
      
    }
   
   
    this.moreEventListener()
    this.showData(data)
    this.showAttendeesList(data)
    this.searchBarEventListener()
    searchBar.value = 'search';
  }
  moreEventListener(){
    this.elements.more.addEventListener("click", (e) => {
      e.preventDefault();
     this.elements.preview.classList.remove("preview");  // code for task #3   , can remove also the class faded , works both
    });
  }
 searchBarEventListener(){
    this.elements.searchBar.required;
    this.elements.searchButton.addEventListener("click", (e) => {          // eventlistener for the searchbutton
      e.preventDefault();
      
    });
  } 

  showAttendeesList(data){
    for (var i in data.attendees) {  // var i represents the property of every attendees
      this.elements.aList.style.display = "flex";
      this.elements.aList.style.flexWrap = "wrap";

      let element = document.createElement('li');
      element.classList.add('list-group-item');
      element.style.display = "flex";
      element.style.flexDirection = "column";

      element.style.alignItems = "center";
      
      element.classList.add('col-12', 'col-md-4', 'col-lg-3');

      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let div = document.createElement('div');
      let img = document.createElement('img');

      
      h3.innerHTML = data.attendees[i].name;
      p.innerHTML = data.attendees[i].role;
      img.src = data.attendees[i].image;                 
      img.style.borderRadius = "50%";
      img.style.width = "100px";
      element.style.margin = "30px";
      
      
      
      element.appendChild(img);  
      element.appendChild(h3);  
      element.appendChild(p);  
      this.elements.aList.appendChild(element); 
    };
  }


  
  showData(data = {}){  // "a={}" means that we take an empty object instance, here as parameter  
 
    newContentText.innerText = data.content;   // task #7

    this.elements.date.innerHTML = `<button class=\"btn\">${ data.meta.day }</button>${data.meta.month}`;
    
    this.elements.img.src = data.organizer.img;
    this.elements.event.innerText = data.type;
    this.elements.details.innerText = data.name;
    this.elements.host.innerText = data.organizer.clearname;
    this.elements.from.innerText = data.organizer.city;
    this.elements.people.innerText = "9";
    this.elements.location.innerText = data.meta.location.street;
   
    
    
    
  }
 
}
const instance_of_view = new ViewLayer();



