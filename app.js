// Items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1533920379810-6bedac961555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY29uJTIwYnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1555243896-771a81243361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xhc3NpYyUyMGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1541745038731-f1c2b5a1a49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RlYWslMjBkaW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


//   Selectors
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


// Event Listeners
// 1. Load Items on Start
window.addEventListener('DOMContentLoaded', () => { 
    displayMenuItems(menu);
    displayMenuBtns();      
});


// Functions
const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map(item => {
        // console.log(item);

        return `<article class="menu-item">
        <img
          src=${item.img}
          alt=${item.title}
          class="photo"
        />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price"> $${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
    });

    displayMenu = displayMenu.join(" ")
    sectionCenter.innerHTML = displayMenu;

}

const displayMenuBtns = () => {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all']);
    const categoryBtns = categories.map(category => {
        return `<button type="button" class="filter-btn" data-id=${category}> ${category} </button>`
    }).join('');
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    // 2. Filter Items

    Array.from(filterBtns).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            // Filtering Data from Database
            const menuCategory = menu.filter(menuItem => {
                // console.log(menuItem.category)
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory)
            if (category === 'all'){
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }

        });
    }); 
}



