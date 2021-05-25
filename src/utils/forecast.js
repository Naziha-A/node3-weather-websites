const request = require('request')
const forecast = (longitude,latitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=196454abec82344f155c70605eeba53c&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json : true } , (error,{body}) => {
             if(error){
                 callback('no internet',undefined)
             }else if(body.error){
                 callback('unable to find location',undefined)
             }
        
             else {
                 callback(undefined, 
                    body.current.weather_descriptions + ".it is currently" + body.current .temperature + "degrees out.it feels like" + body.current.feelslike + "degrees out.")
                }
             
            })
        
        

}

module.exports = forecast