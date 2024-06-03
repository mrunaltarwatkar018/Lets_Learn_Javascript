// const promiseOne = new promise();

// One way to declare Promises

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve();
    }, 1000);
});

// promise consumption
promiseOne.then(function() {
    console.log('Promise consumed');
});

/*
    Expected Output =>
        Async task is compelete
        Promise consumed
*/



// Another way to declare Promises

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})

/*
    Expected Output =>
        Async task 2
        Async 2 resolved
*/


// Another way to declare Promises

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mrunal", email: "mrunal@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/*
    Expected Output =>
        { username: 'Mrunal', email: 'mrunal@example.com' }
*/


// Another way to declare Promises

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Mrunal", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


promiseFour
    .then(function(user){
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"))



/*
    Expected Output =>
        ERROR: Something went wrong
        The promise is either resolved or rejected
*/




// Another way to declare Promises


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


/*
    Expected Output => 
        { username: 'javascript', password: '123' } // only occur when let error = false
*/

/*
    Expected Output => 
        ERROR: JS went wrong   // only occur when let error = true
*/



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers();


/*
    Expected Output => 
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object]
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object]
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object]
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]
Async task is compelete
Promise consumed
Async task 2
Async 2 resolved
{ username: 'Mrunal', email: 'mrunal@example.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
ERROR: JS went wrong
*/



fetch('https://api.github.com/users/mrunaltarwatkar018')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));


/*
    Expected Output => 
{
  login: 'mrunaltarwatkar018',
  id: 112857494,
  node_id: 'U_kgDOBroRlg',
  avatar_url: 'https://avatars.githubusercontent.com/u/112857494?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mrunaltarwatkar018',
  html_url: 'https://github.com/mrunaltarwatkar018',
  followers_url: 'https://api.github.com/users/mrunaltarwatkar018/followers',        
  following_url: 'https://api.github.com/users/mrunaltarwatkar018/following{/other_user}',
  gists_url: 'https://api.github.com/users/mrunaltarwatkar018/gists{/gist_id}',      
  starred_url: 'https://api.github.com/users/mrunaltarwatkar018/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mrunaltarwatkar018/subscriptions',
  organizations_url: 'https://api.github.com/users/mrunaltarwatkar018/orgs',
  repos_url: 'https://api.github.com/users/mrunaltarwatkar018/repos',
  events_url: 'https://api.github.com/users/mrunaltarwatkar018/events{/privacy}',    
  received_events_url: 'https://api.github.com/users/mrunaltarwatkar018/received_events',
  type: 'User',
  site_admin: false,
  name: 'Mrunal Tarwatkar',
  company: null,
  blog: '',
  location: 'India',
  email: null,
  hireable: null,
  bio: 'Simple Coder and Web Developer ✨',
  twitter_username: 'mrunal6219',
  public_repos: 29,
  public_gists: 0,
  followers: 3,
  following: 6,
  created_at: '2022-09-05T08:35:55Z',
  updated_at: '2024-05-22T17:39:49Z'
}
Async task is compelete
Promise consumed
Async task 2
Async 2 resolved
{ username: 'Mrunal', email: 'mrunal@example.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
ERROR: JS went wrong
*/




