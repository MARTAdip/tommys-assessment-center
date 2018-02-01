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
      'preview': document.querySelector('preview'),
      'aList': document.getElementById('attendees-list'),
      'date': document.getElementById('date'),
      'img': document.getElementById('avatar'),
      'span': document.getElementById('timeDisplay'),
      
    }
    this.moreEventListener()
    this.showData(data)
    this.showAttendeesList(data)
  }
  moreEventListener(){
    this.elements.more.addEventListener("click", (e) => {
      e.preventDefault();
                                    // code for task #3
    });
  }
  

  showAttendeesList(data){                        
    for (var i in data.attendees) {
      let element = document.createElement('li');
      element.classList.add('list-group-item');
      let img = document.createElement('img');
      img.src = ("https://secure.meetupstatic.com/photos/member/6/9/4/b/member_261506955.jpeg"); 
      //img.style.borderRadius = 50%;        
      element.innerHTML = data.attendees.name;
      this.elements.aList.appendChild(element).appendChild(img);
      
    };
  }


  
  showData(data = {}){  // "a={}" means that we take an empty object instance, here as parameter  
 
    /*  let div = document.getElementById('#newText');
     document.div.innerText = document.div.innerText.replace("Talk #1: Job Queues, Deployment and Sandboxing Tim will share insights and give practical examples of architectural and code issues he ran into while building his SaaS tool Checkly (https://checklyhq.com). \n\r Talk #2: Debugging & Performance Analysis in Node.js Dominic Umbeer will share some approaches to keep track of system performance and tools for debugging and performance analysis, such as node-inspect, Chrome DevTools & New Relic. Always track performance after significant internal code changes! :) \n\r ----- \n\r JOBS NOTICE: If you're looking for an exciting new tech job or you're looking to hire great devs, please use www.upandfront.com (https://www.upandfront.com/?nmbj0118). It's a 100% dev-run agency and they help us keep the meetups about code only. Register in under half a minute!");              */                        // here comes code for task #7
    this.elements.date.innerHTML = `<button class=\"btn\">${ data.meta.day }</button>${data.meta.month}`
    this.elements.img.src = data.organizer.img;
     
  }
}
const instance_of_view = new ViewLayer();

