// How to create a callback

function GetCountryIdByName(countryName,cb){
    let country=[{name:"India",countryId:1},{name:"USA",countryId:10},{name:"Germany",countryId:11}]
  
    const countryObj=country.find(ele=>ele.name==countryName);
    const countryId=countryObj.countryId;
    cb(countryId);
    
    
  }
  
  function GetStateIdByCountryId(countryId,cb){
    let states=[{name:"UP",countryId:1,country:"India",id:18},{name:"NewYork",countryId:10,country:"USA",id:90},{name:"Germanstate",countryId:11,country:"GERMANY",id:87}]
  
  const stateObj=states.find(function(ele){
    return ele.countryId ==countryId
  })
  
    cb(stateObj.id)
  }
  
  function GetCityByStateId(stateId,cb){
    let cities=[
      {id:23,name:"Lucknow",stateId:18 },
      {id:234,name:"Manchester",stateId:90 },
      {id:213,name:"Berlin",stateId:87 }
      
    ]
  
    const cityObj=cities.find(function(ele){
      return ele.stateId ==stateId
    })
      cb(cityObj)
    
  }
  
  function GetPopulationByCityId(cityId,cb){
    let data=[
      {cityId:23,population:100000},
      {cityId:234,population:10120000},
  
      {cityId:213,population:10089000}
  
    ]
  
    cb( data.find(ele=>ele.cityId==cityId));
    
  }
  
  // Callback hell 
  // when you have a dependent functions
  // it creates a pattern for nested callbacks
  // which lead to an anti pattern known as callback hell (pyramid of doom)
  
  GetCountryIdByName("Germany",function(countryId){
      GetStateIdByCountryId(countryId,function(stateId){
        GetCityByStateId(stateId,function(cityObject){
          GetPopulationByCityId(cityObject.id,function(populationObject){
            console.log(populationObject)
  
          })
          
        })
        
      })
    
  })