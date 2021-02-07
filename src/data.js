import img1 from "./assets/images/off1.png";
import img2 from "./assets/images/off2.png";
import img3 from "./assets/images/off3.png";
import img4 from "./assets/images/off4.png";

export default[
      {
        title: "Iceland Hotel/Fosshotel",
        location: "Reykjavik",
        image:
          [{id:'1', image: img1}], 
          content:
          [{id: '11',
          min_price: "6,578  kr",
          max_price: "23,480",
          description: "Included in hotel price: Breakfast (open 5-10pm),Wireless internet",
          web_addres: "islandshotel.is"}]
      },
      {
        title: "Hotel Keflavik",
        location: "North",
        image:
       [ {id:'2', image: img2}], 
        content:
        [{id: '12',
        min_price: "6,578  kr",
        max_price: "23,480",
        description: "Included in hotel price: Breakfast (open 5-10pm),Wireless internet",
        web_addres: "islandshotel.is"}]
      },
      {
        title: "Hotel Edda",
        location: "East",
        image:
         [ {id:'3', image: img3}], 
        content:
          [{id: '13',
          min_price: "6,578  kr",
          max_price: "23,480",
          description: "Included in hotel price: Breakfast (open 5-10pm),Wireless internet",
          web_addres: "Edda.is"}]
      },
      {
        title: "Center Hotel",
        location: "Reykjavik",
        image:
         [{id:'4', image: img4}], 
        content: [{ id: '14',
        min_price: "6,578  kr",
        max_price: "23,480",
        description: "Included in hotel price: Breakfast (open 5-10pm),Wireless internet",
        web_addres: "islandshotel.is"}]
      }
]