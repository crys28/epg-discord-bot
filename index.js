// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

// const { token } = require('./config.json');

const Discord = require('discord.js')
const { userInfo } = require('os')
const client = new Discord.Client()

const URL = "https://gg.deals/deals/best-deals/";


// let id = "";
//while (true) {

    
        
        (async () => {
            
           
              let gamesData = [];

              const response = await request({
          
                  uri: URL,
                  headers: {
                      'authority': 'gg.deals',
                      'method': 'GET',
                      'path': '/deals/best-deals/',
                      'scheme': 'https',
                      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                      'accept-encoding': 'gzip, deflate, br',
                      'accept-language':' en-US,en;q=0.9',
                      'cache-control': 'max-age=0',
                      'referer': 'https://gg.deals/deals/best-deals/',
                      'sec-fetch-mode': 'navigate',
                      'sec-fetch-site': 'same-origin',
                      'upgrade-insecure-requests': '1',
                      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.121 Safari/537.36 Vivaldi/2.8.1664.44'
                  },
                     gzip: true,
              });
          
        
              let $ = cheerio.load(response);

              let title = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(1) > a').text().trim();
              let price = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(3) > a > span').text().trim();
              let discount = $('.list-items > div:nth-child(1) > .game-info-wrapper > ul > li > span').text().trim();
              let originalPrice = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(3) > span').text().trim();
              let image = $('.list-items > div:nth-child(1) > .game-image > a > img').attr('src');
              let shopImg = $('.list-items > div:nth-child(1) > div:nth-child(5) > span > img').attr('src');

            //   let list = [title, price, discount, originalPrice, image, shopImg];
              
            //   for(i=0; i<=5; i++){
                
            //     if (list[i] == "") {
            //     list[i] = "asd";
            //   }
              
            // }

              if (discount == "") {
                  discount = "-";
              }



             // let shopLink = $('div[class="list-items"] > div:nth-child(1) > div:nth-child(5) > a').attr('href');

            // let title = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(1) > a').text().trim();
            // let price = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(3) > a > span').text().trim();
            // let discount = $('.list-items > div:nth-child(3) > .game-info-wrapper > ul > li > span').text().trim();
            // let originalPrice = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(3) > span').text().trim();
            // let image = $('.list-items > div:nth-child(3) > .game-image > a > img').attr('src');
            // let shopImg = $('.list-items > div:nth-child(3) > div:nth-child(5) > span > img').attr('src');


            //   let genres = [];
            //   $('div[class="title_wrapper"] a[href^="/search/"]').each((i,el) => {
            //       let genre = $(el).text();
          
            //       genres.push(genre);
            //   });
            
            


              gamesData.push({
                  title,
                  price,
                  discount,
                  originalPrice,
                  image,
                  shopImg
              })
          
                  fs.writeFileSync('./data.json' , JSON.stringify(gamesData), 'utf-8');
          
              console.log(gamesData);
              
              console.log(`Title : ${title}`);
              console.log(`Discount : ${discount}`);
              console.log(`Price : ${price}`);
              console.log(`Original price : ${originalPrice}`);
              console.log(`Image : ${image}`);
              console.log(`ShopImg : ${shopImg}`);
            //   // console.log(`ShopLink : ${shopLink}`);
          
          
          
              client.on('ready', () => {
                function NewGame(){ 

////////////////////
(async () => {
            
           
    let gamesData = [];

    const response = await request({

        uri: URL,
        headers: {
            'authority': 'gg.deals',
            'method': 'GET',
            'path': '/deals/best-deals/',
            'scheme': 'https',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language':' en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'referer': 'https://gg.deals/deals/best-deals/',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.121 Safari/537.36 Vivaldi/2.8.1664.44'
        },
           gzip: true,
    });


    let $ = cheerio.load(response);

    let title = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(1) > a').text().trim();
    let price = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(3) > a > span').text().trim();
    var discount = $('.list-items > div:nth-child(1) > .game-info-wrapper > ul > li > span').text().trim();
    let originalPrice = $('.list-items > div:nth-child(1) > .game-info-wrapper > div:nth-child(3) > span').text().trim();
    let image = $('.list-items > div:nth-child(1) > .game-image > a > img').attr('src');
    let shopImg = $('.list-items > div:nth-child(1) > div:nth-child(5) > span > img').attr('src');

    if (discount == "") {
        discount = "-";
    }
   // let shopLink = $('div[class="list-items"] > div:nth-child(1) > div:nth-child(5) > a').attr('href');

  // let title = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(1) > a').text().trim();
  // let price = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(3) > a > span').text().trim();
  // let discount = $('.list-items > div:nth-child(3) > .game-info-wrapper > ul > li > span').text().trim();
  // let originalPrice = $('.list-items > div:nth-child(3) > .game-info-wrapper > div:nth-child(3) > span').text().trim();
  // let image = $('.list-items > div:nth-child(3) > .game-image > a > img').attr('src');
  // let shopImg = $('.list-items > div:nth-child(3) > div:nth-child(5) > span > img').attr('src');


  //   let genres = [];
  //   $('div[class="title_wrapper"] a[href^="/search/"]').each((i,el) => {
  //       let genre = $(el).text();

  //       genres.push(genre);
  //   });


 
    gamesData.push({
        title,
        price,
        discount,
        originalPrice,
        image,
        shopImg
    })

        fs.writeFileSync('./data.json' , JSON.stringify(gamesData), 'utf-8');

    console.log(gamesData);
    
    console.log(`Title : ${title}`);
    console.log(`Discount : ${discount}`);
    console.log(`Price : ${price}`);
    console.log(`Original price : ${originalPrice}`);
    console.log(`Image : ${image}`);
    console.log(`ShopImg : ${shopImg}`);



    
    
})()
////////////////////

                  var contentsDis = fs.readFileSync("dataDis.json");
                  var objsArrayDis = []
                  objsArrayDis = JSON.parse(contentsDis);
              
                      titleDis2 = objsArrayDis[0].titleDis2;
                      priceDis2 = objsArrayDis[0].priceDis2;
                      discountDis2 = objsArrayDis[0].discountDis2;
                      originalPriceDis2 = objsArrayDis[0].originalPriceDis2;
                      imageDis2 = objsArrayDis[0].imageDis2;
                      shopImgDis2 = objsArrayDis[0].shopImgDis2;
              
                  var contents = fs.readFileSync("data.json");
                  var objsArray = []
                  objsArray = JSON.parse(contents);
              
                      titleDis = objsArray[0].title;
                      priceDis = objsArray[0].price;
                      discountDis = objsArray[0].discount;
                      originalPriceDis = objsArray[0].originalPrice;
                      imageDis = objsArray[0].image;
                      shopImgDis = objsArray[0].shopImg;
              
              
                      ///////// EMBED MESSAGE //////////////
              
                  const exampleEmbed = new Discord.MessageEmbed()
                  .setColor('#800080')
                  .setTitle('Game News')
                  .setURL('https://gg.deals/deals/best-deals/')
                  .setAuthor('EPGames', 'https://toppng.com/uploads/preview/anime-lolis-11562938919z1uonlpa37.png' , 'https://gg.deals/deals/best-deals/')
                  .setDescription('Game discount 👇')
                  .setThumbnail(shopImgDis)
                  .addFields(
                      { name: 'Title 👇', value: titleDis },
                      { name: 'Discount👇', value: discountDis },
                      { name: 'Price👇', value: priceDis },
                      { name: 'Original price👇:', value: originalPriceDis },
                  )
                  .setImage(imageDis)
                  .setTimestamp()
                  .setFooter('Made by Crys28', 'https://lh3.googleusercontent.com/PZ2hCEzA7Z1jfPrRGgugysRNW5C0tocq3cmpi27iXkqWSmxpx9pTpAYeWK7nw0y0tJwY2A=s124');
              
              ////////////////////BOT DETAILS////////////// 
              
                  console.log("Connected as " + client.user.tag)
              
                  client.user.setActivity("🎮League of Legends👾 || $help")
              
                  //const Guild = client.guilds.cache.get("394665786490224640");
                  
                //   client.guilds.cache.forEach((guild) => {
                //       console.log(guild.name)
                //       guild.channels.cache.forEach((channel) => {
                //         console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
                //       })
                //       //general text id :  723112865569177704  394665786490224640
                //   })
               
          
                  
                  let gamesDataDis = [];
              
              //////////COMPARISON FUNCTION//////////    
            
            let generalChannel = client.channels.cache.get("730583066287931557"); // 723112865569177704 - text section from TEST
                                                                                  // 730583066287931557 - text section from EPG
              if((titleDis2 != titleDis) || 
                 (priceDis2 != priceDis) ||
                  (discountDis2 != discountDis) || 
                  (originalPriceDis2 != originalPriceDis) ||
                  (imageDis2 != imageDis) ||
                  (shopImgDis2 != shopImgDis)){
              
                      titleDis2 = titleDis;
                      priceDis2 = priceDis;
                      discountDis2 = discountDis;
                      originalPriceDis2 = originalPriceDis;
                      imageDis2 = imageDis;
                      shopImgDis2 = shopImgDis;
              
                      gamesDataDis.push({
                          titleDis2,
                          priceDis2,
                          discountDis2,
                          originalPriceDis2,
                          imageDis2,
                          shopImgDis2
                      })
              
                      fs.writeFileSync('./dataDis.json' , JSON.stringify(gamesDataDis), 'utf-8');

                      
                      // //  723112865569177704    const attachment = new Discord.MessageAttachment("https://toppng.com/uploads/preview/anime-lolis-11562938919z1uonlpa37.png")
                              generalChannel.send("Most recent game on sale is 🔽")
                              generalChannel.send(exampleEmbed);
                              generalChannel.send("@everyone Claim this game as fast as possible 😋");
                               
              
                  } else{
                      
                      console.log('No new Game')
                      generalChannel.send("Sadly, no new game on sale 😢");
                      }
                      
                  
                    } 



                      client.on('message', (receivedMessage) => {
                        let content = receivedMessage.content;
                        
                         
                      
                        if (receivedMessage.content.startsWith("$")) {
                         processCommand(receivedMessage)
                      }
                      
                        
                      
                            })
                      
                      
                            function processCommand(receivedMessage) {
                      
                              let fullCommand = receivedMessage.content.substr(1) // Remove the @ sign
                              let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
                              let primaryCommand = splitCommand[0] // The first word directly after the @ is the command
                              let arguments = splitCommand.slice(1) // All other words are arguments for the command
                      
                      
                              const helpEmbed = new Discord.MessageEmbed()
                          .setColor('#222')
                          .setTitle('Help')
                          .setURL('https://discord.js.org/')
                          .setAuthor('EPG', 'https://toppng.com/uploads/preview/anime-lolis-11562938919z1uonlpa37.png', 'https://discord.js.org')
                          .setDescription('All the help commands are listed here :')
                          .setThumbnail('https://lh3.googleusercontent.com/52BtE0gL6OZdd-hCVTLNmr0_6Un4QZVwVdgTLS9r_b8yvP_maVokhCPerTDRFZem8Axhgw=s85')
                          .addFields(
                              { name: '🖕To see the most recent game on sale 👇',  value: '\n$game_news' },
                              { name: '\u200B', value: '\u200B' },
                              { name: '🖕To see the current game on sale 👇', value: '\n$game_current' },
                              { name: '\u200B', value: '\u200B' }
                          )
                          .setImage('https://s1.qwant.com/thumbr/0x380/3/c/1ce855ac89c93ad3fff05cae5c3bffe8364003d4e42671e1c102d3f12169fc/depositphotos_73473161-stock-illustration-smiley-with-help-symbol.jpg?u=https%3A%2F%2Fst2.depositphotos.com%2F1052233%2F7347%2Fv%2F950%2Fdepositphotos_73473161-stock-illustration-smiley-with-help-symbol.jpg&q=0&b=1&p=0&a=0')
                          .setTimestamp()
                          .setFooter('Made by Crys28', 'https://toppng.com/uploads/preview/anime-lolis-11562938919z1uonlpa37.png');
                      
                            

                          var contentsDis = fs.readFileSync("dataDis.json");
                  var objsArrayDis = []
                  objsArrayDis = JSON.parse(contentsDis);
              
                      titleDis2 = objsArrayDis[0].titleDis2;
                      priceDis2 = objsArrayDis[0].priceDis2;
                      discountDis2 = objsArrayDis[0].discountDis2;
                      originalPriceDis2 = objsArrayDis[0].originalPriceDis2;
                      imageDis2 = objsArrayDis[0].imageDis2;
                      shopImgDis2 = objsArrayDis[0].shopImgDis2;
              
                  var contents = fs.readFileSync("data.json");
                  var objsArray = []
                  objsArray = JSON.parse(contents);
              
                      titleDis = objsArray[0].title;
                      priceDis = objsArray[0].price;
                      discountDis = objsArray[0].discount;
                      originalPriceDis = objsArray[0].originalPrice;
                      imageDis = objsArray[0].image;
                      shopImgDis = objsArray[0].shopImg;
              
              


                      ///////// EMBED MESSAGE //////////////
              
                  const exampleEmbed = new Discord.MessageEmbed()
                  .setColor('#800080')
                  .setTitle('Game News')
                  .setURL('https://gg.deals/deals/best-deals/')
                  .setAuthor('EPGames', 'https://toppng.com/uploads/preview/anime-lolis-11562938919z1uonlpa37.png' , 'https://gg.deals/deals/best-deals/')
                  .setDescription('Game discount 👇')
                  .setThumbnail(shopImgDis)
                //   .addField('Title', titleDis, true)
                //   .addField('Discount', discountDis, true)
                //   .addField('Price👇', priceDis)
                //   .addField('Original price👇', originalPriceDis)
                  .addFields(
                      { name: 'Title 👇', value: titleDis },
                      { name: 'Discount👇', value: discountDis },
                      { name: 'Price👇', value: priceDis },
                      { name: 'Original price👇:', value: originalPriceDis },
                  )
                  .setImage(imageDis)
                  .setTimestamp()
                  .setFooter('Made by Crys28', 'https://lh3.googleusercontent.com/PZ2hCEzA7Z1jfPrRGgugysRNW5C0tocq3cmpi27iXkqWSmxpx9pTpAYeWK7nw0y0tJwY2A=s124');
                      
        
                           //////COMANDS\\\\\\\
        
            if (primaryCommand == "help") {
                receivedMessage.channel.send(
            helpEmbed
            )
            } else if (primaryCommand == "game_news"){
                    receivedMessage.channel.send(
                        NewGame()
                          )
            } else if (primaryCommand == "game_current"){
                receivedMessage.channel.send(
                  "Current game on sale is 🔽"
                    )
                    receivedMessage.channel.send(
                       exampleEmbed
                          )
            } 
            // else if (primaryCommand == "channel"){
               
            //     id = arguments;
            //     console.log(id);
            // }
                      
                        }


                  
              

       
              })  // Finisarea la client.on READY
              
              
              

              
               


          
              client.login(process.env.BOT_TOKEN)
              
              
             
             
              
          
          
            
              
         //   }, 3000);
         //   }
        


          })()


    

    //infinite loop
// }



// function Waiting(){
//     console.log('searching................')
// }

    
//     setTimeout(Waiting,10000)

 // Bot token


