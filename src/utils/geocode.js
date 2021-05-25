const request = require('request')
const geocode = (address,callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/ '+ address +'.json?access_token=pk.eyJ1IjoibmF6aWhhIiwiYSI6ImNrb3h6cTBseTA0dDkyd3E3amRpaHUzNDYifQ._ZSRpf1hvwc_MLWgMmJtiQ&limit=1' 
    request({ url, json: true}, (error,{body}) =>{
             if(error){
                 callback('no internet', undefined)
             }else if(body.features.length == 0){
                 callback('unable find location', undefined)
             }else {
                 callback(undefined,{
                     longitude:body.features[0].center[0],
                     latitude: body.features[0].center[1],
                     location: body.features[0].place_name
                 })

             }
    })
}

module.exports = geocode

