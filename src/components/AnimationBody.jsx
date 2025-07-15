import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/index.css'; // Import your CSS styles


const AnimationBody = () => {
  const navigate = useNavigate();

  const handleBook = (service) => {
    // Navigate to the DynamicForm page and pass the service information via state
    navigate('/bokanu', { state: { serviceName: service.name, servicePrice: service.price } });
  };
 /* const handleLearnMore = (service) => {
    // Navigate to the ServiceInfo page and pass the service information
    navigate('/lasmer', { state: { serviceName: service.name, serviceTitle: service.title, serviceDetail: service.detail } });
  }; */


  const services = [
    {id: 1, name: 'MR Ländrygg', price: '4 100kr', title:'Magnetröntgen Ländrygg', detail: 'Ryggvärk är ett väldigt vanligt symtom är den tredje vanligaste diagnosen vid långa sjukskrivningar. Långvarig ryggsmärta kan leda till stora begränsningar i vardagen och ett stort psykiskt lidande. Undersökning med magnetkamera möjliggör snabb diagnos av eventuella diskbråck och ryggmärgssjukdomar. Tillsammans med din symtombild möjliggör det en korrekt diagnos vilket ger optimala förutsättningar för rätt behandling och rehabilitering. Undersökningen är ofarlig, smärtfri och du utsätts inte för farlig joniserande strålning. Alla bilder granskas av erfarna specialistläkare inom radiologi. ', restrictions: 'Du kan inte undersökas i magnetkamera om du har metallsplitter i någon del av kroppen, pacemaker, insulinpump eller annan elektronisk utrustning inopererad. Däremot går det att genomföra undersökningen om du har icke magnetisk metall, som till exempel höft- eller knäledsprotes eller tandfyllning.' },
    {id: 2, name: 'MR Höger Axel', price: '4 100kr', title:'Magnetröntgen Axel', detail: 'Smärta från axelleden är en vanlig åkomma och kan orsaka stora inskränkningar i din vardag. Har du ont i axeln kan det bero på inflammation, artros eller skada på senor och muskler i rotatorkuffen. En av de vanligaste orsakerna till smärta i axelleden är impingement. Det innebär att strukturer i axeln kommer i kläm och det orsakar smärta vid rörelse. Andra vanligt förekommande tillstånd är frusen skuldra (frozen shoulder) och kalkaxel. En magnetkameraundersökning av axeln kan bidra med en snabb diagnos och möjlighet till rätt behandling och rehabilitering. ' },
    {id: 3, name: 'MR Vänster Axel', price: '4 100kr', title:'Magnetröntgen Axel', detail: 'Smärta från axelleden är en vanlig åkomma och kan orsaka stora inskränkningar i din vardag. Har du ont i axeln kan det bero på inflammation, artros eller skada på senor och muskler i rotatorkuffen. En av de vanligaste orsakerna till smärta i axelleden är impingement. Det innebär att strukturer i axeln kommer i kläm och det orsakar smärta vid rörelse. Andra vanligt förekommande tillstånd är frusen skuldra (frozen shoulder) och kalkaxel. En magnetkameraundersökning av axeln kan bidra med en snabb diagnos och möjlighet till rätt behandling och rehabilitering.' },
    {id: 4, name: 'MR Bäcken/höftleder', price: '4 100kr', title:'Magnetröntgen Bäcken/höfleder', detail: 'En magnetkameraundersökning av bäcken och höftleder kan påvisa inflammation i muskelfästen och senskidor vilket kan vara av vikt vid exempelvis oklara smärttillstånd i bäcken- och höftområdet.  Man kan exempelvis påvisa slemsäcksinflammation (bursit) eller artros. ' },
    {id: 5, name: 'MR Vänster Knä', price: '4 100kr', title:'Magnetröntgen Knä', detail: 'Magnetkameraundersökning av knät är en bra undersökning för att upptäcka skada på t.ex. korsband, ledband och menisk. En korsbandsskada kan uppstå efter förhållandevis lindrigt trauma och kan leda till smärta, svullnad samt instabilitet i knäleden. En undersökning med magnetkamera kan tidigt upptäcka en korsbandsskada och möjliggöra rätt behandling och rehabilitering. Andra sjukdomstillstånd i knäet som är svåra att diagnostisera utan en MR är meniskskada, ledbandsskada samt patellaskada.' },
    { id: 6, name: 'MR Helkropp', price: '18 400kr' },
    {id: 7, name: 'MR Bröstrygg', price: '4 100kr', title:'Magnetröntgen Bröstrygg', detail: 'Ryggvärk är ett väldigt vanligt symtom som är den tredje vanligaste diagnosen vid långa sjukskrivningar. Långvarig ryggsmärta kan leda till stora begränsningar i vardagen och ett stort psykiskt lidande. Undersökning med magnetkamera möjliggör snabb diagnos av eventuella diskbråck och ryggmärgssjukdomar. Tillsammans med din symtombild möjliggör det en korrekt diagnos vilket ger optimala förutsättningar för rätt behandling och rehabilitering. Undersökningen är ofarlig, smärtfri och du utsätts inte för farlig joniserande strålning. Alla bilder granskas av erfarna specialistläkare inom radiologi. ' },
    {id: 8, name: 'MR Höger Fot', price: '4 100kr', title:'Magnetröntgen Fot', detail: 'Smärta från foten kan bl.a. bero på inflammation, en stukning, fraktur eller hälsporre. En MR fot kartlägger fotens ben, muskler, senor och nerver och är den bästa undersökningen för att hitta en orsak till dina besvär och på så vis få rätt behandling och rehabilitering' },
    {id: 9, name: 'MR Vänster Fot', price: '4 100kr', title:'Magnetröntgen Fot', detail: 'Smärta från foten kan bl.a. bero på inflammation, en stukning, fraktur eller hälsporre. En MR fot kartlägger fotens ben, muskler, senor och nerver och är den bästa undersökningen för att hitta en orsak till dina besvär och på så vis få rätt behandling och rehabilitering' },
    {id: 10, name: 'MR Höger Fotled', price: '4 100kr', title:'Magnetröntgen Fotled', detail: 'Smärta från fotleden är ett mycket vanligt tillstånd och ofta är det kopplat till ett trauma, så som en stukning av fotleden. Detta kan leda till ledbandsskador där, i lindriga fall, ett ledband töjs ut men det kan även leda till att ett ledband helt går av. I värsta fall kan det orsaka fraktur på benet. En undersökning med MR av fotleden är den bästa undersökningen för att tidigt upptäcka ledbandsskada och på så vis få rätt behandling och rehabilitering.' }, 
    {id: 11, name: 'MR Vänster Fotled', price: '4 100kr', title:'Magnetröntgen Fotled', detail: 'Smärta från fotleden är ett mycket vanligt tillstånd och ofta är det kopplat till ett trauma, så som en stukning av fotleden. Detta kan leda till ledbandsskador där, i lindriga fall, ett ledband töjs ut men det kan även leda till att ett ledband helt går av. I värsta fall kan det orsaka fraktur på benet. En undersökning med MR av fotleden är den bästa undersökningen för att tidigt upptäcka ledbandsskada och på så vis få rätt behandling och rehabilitering.' }, 
    {id: 12, name: 'MR Höger Hand', price: '4 100kr', title:'Magnetröntgen Hand', detail: 'En magnetröntgen av din hand kan tidigt upptäcka skador på skelett, ledband, senor och nerver som kan vara svåra att upptäcka. En tidig upptäckt gör att du snabbt kan få rätt behandling och rehabilitering.' },
    {id: 13, name: 'MR Vänster Hand', price: '4 100kr', title:'Magnetröntgen Hand', detail: 'En magnetröntgen av din hand kan tidigt upptäcka skador på skelett, ledband, senor och nerver som kan vara svåra att upptäcka. En tidig upptäckt gör att du snabbt kan få rätt behandling och rehabilitering.' },
    {id: 14, name: 'MR Hälsena', price: '4 100kr', title:'Magnetröntgen Hälsena', detail: 'En skadad hälsena kan vara smärtsam och begränsande, men det finns flera behandlingsalternativ som kan hjälpa till att lindra symptomen och främja läkningen. För att kunna behandla en skadad hälsena på rätt sätt är det viktigt att förstå vad en hälseneskada är och vad som kan orsaka den. Det är också viktigt att känna till de vanliga symptomen och när det är dags att söka medicinsk hjälp. Diagnostisering av en skadad hälsena kan göras genom läkarbesök och olika medicinska tester. När diagnosen är fastställd kan olika behandlingsalternativ användas, antingen konservativ behandling hemma eller professionell medicinsk behandling. Efter behandlingen är rehabilitering och återhämtning viktig för att återfå full funktion i hälsenan och förhindra framtida skador. I denna artikel kommer vi att gå igenom samtliga steg för att behandla en skadad hälsena och ge dig råd om hur du kan undvika framtida skador.' },
    {id: 15, name: 'MR Höger Armbåge', price: '4 100kr', title:'Magnetröntgen Armbåge', detail: 'Magnetröntgen av armbågen används för att noggrant diagnostisera skador och sjukdomar i armbågsleden. Den ger detaljerade bilder av både mjukdelar och ben, vilket är särskilt användbart för att upptäcka senskador, ligamentskador, broskskador och muskelbristningar. MRT är också bra för att utvärdera artrit, inflammationer och degenerativa förändringar, samt för att upptäcka tumörer eller infektioner. Eftersom MRT inte använder röntgenstrålar är det en säker undersökningsmetod, särskilt vid behov av upprepade undersökningar.' },
    {id: 16, name: 'MR Vänster Armbåge', price: '4 100kr', title:'Magnetröntgen Armbåge', detail: 'Magnetröntgen av armbågen används för att noggrant diagnostisera skador och sjukdomar i armbågsleden. Den ger detaljerade bilder av både mjukdelar och ben, vilket är särskilt användbart för att upptäcka senskador, ligamentskador, broskskador och muskelbristningar. MRT är också bra för att utvärdera artrit, inflammationer och degenerativa förändringar, samt för att upptäcka tumörer eller infektioner. Eftersom MRT inte använder röntgenstrålar är det en säker undersökningsmetod, särskilt vid behov av upprepade undersökningar.' },
    {id: 17, name: 'MR Höger Underben', price: '4 100kr', title:'Magnetröntgen Underben', detail: 'Magnetröntgen av underbenet, eller MRT, används för att diagnostisera skador och sjukdomar i benets mjukdelar och skelett. Den ger detaljerade bilder av muskler, senor, ledband och ben, vilket gör den effektiv för att upptäcka muskelbristningar, senskador, benfrakturer och stressfrakturer. MRT kan också identifiera inflammationer, infektioner, och tumörer, samt utvärdera tillstånd som påverkar blodkärl och nervbanor. Eftersom MRT inte använder röntgenstrålar är det en säker metod, även för upprepade undersökningar.'  },
    {id: 18, name: 'MR Vänster Underben', price: '4 100kr', title:'Magnetröntgen Underben', detail: 'Magnetröntgen av underbenet, eller MRT, används för att diagnostisera skador och sjukdomar i benets mjukdelar och skelett. Den ger detaljerade bilder av muskler, senor, ledband och ben, vilket gör den effektiv för att upptäcka muskelbristningar, senskador, benfrakturer och stressfrakturer. MRT kan också identifiera inflammationer, infektioner, och tumörer, samt utvärdera tillstånd som påverkar blodkärl och nervbanor. Eftersom MRT inte använder röntgenstrålar är det en säker metod, även för upprepade undersökningar.'  },
    {id: 19, name: 'MR Sacrum/Sacroliacaleder', price: '4 100kr', title:'Magnetröntgen Sacrum/Sacroliacalender', detail: 'Magnetröntgen av sacrum och sakroiliakalederna (MRT) används för att diagnostisera smärtor och problem i nedre delen av ryggen och bäckenet. MRT ger detaljerade bilder av både skelett och mjukvävnader, vilket gör det möjligt att upptäcka inflammationer, ledskador, slitage, och sakroiliit (inflammation i sakroiliakalederna). Det är särskilt användbart vid misstanke om artrit, diskproblem eller nervinklämningar. MRT är också bra för att upptäcka tumörer, infektioner eller frakturer i området. Eftersom MRT inte använder röntgenstrålar är den skonsam och säker för patienten, även vid upprepade undersökningar.' },
    {id: 22, name: 'MR Nacke/Halsrygg', price: '4 100kr', title:'Magnetröntgen Nacke/Halsrygg', detail: 'Har du symtom i nacke, skuldra eller axlar? Konstant molande värk eller skarp smärta påverkar vardagen på ett väldigt negativt sätt. I många fall kan det handla om felaktig hållning, belastning eller överansträngning av nacken. Även kyla, spänningar i muskulaturen och stress kan vara orsaker till stel nacke. Det är dock inte ovanligt att symtomen kan orsakas av diskbråck i halsryggen, tidigare olyckshändelser eller förslitning av diskar och brosk i nackkotor. Ju tidigare man kan ta reda på orsaken till dina symtom desto snabbare kan du få rätt behandling och rehabilitering av ditt tillstånd. Med MR Halsrygg får du reda på eventuella skador eller sjukdomar direkt, så att du kan påbörja din rehabilitering omedelbart. ' },
    {id: 23, name: 'MR Helrygg', price: '9 000kr', title:'Magnetröntgen Helrygg', detail: 'Ryggvärk är ett väldigt vanligt symtom och är den tredje vanligaste diagnosen vid långa sjukskrivningar. Långvarig ryggsmärta kan leda till stora begränsningar i vardagen och ett stort psykiskt lidande. Undersökning med magnetkamera möjliggör snabb diagnos av eventuella diskbråck och ryggmärgssjukdomar. Tillsammans med din symtombild möjliggör det en korrekt diagnos vilket ger optimala förutsättningar för rätt behandling och rehabilitering. Undersökningen är ofarlig, smärtfri och du utsätts inte för farlig joniserande strålning. Alla bilder granskas av erfarna specialistläkare inom radiologi. ' },
    {id: 26, name:  'MR Höger Knä', price: '4 100kr', title:'Magnetröntgen Knä', detail: 'Magnetkameraundersökning av knät är en bra undersökning för att upptäcka skada på t.ex. korsband, ledband och menisk. En korsbandsskada kan uppstå efter förhållandevis lindrigt trauma och kan leda till smärta, svullnad samt instabilitet i knäleden. En undersökning med magnetkamera kan tidigt upptäcka en korsbandsskada och möjliggöra rätt behandling och rehabilitering. Andra sjukdomstillstånd i knäet som är svåra att diagnostisera utan en MR är meniskskada, ledbandsskada samt patellaskada.' },
    {id: 29, name: 'MR Höger Överarm', price: '4 100kr', title:'Magnetröntgen Överarm', detail: 'Smärta från överarm är en vanlig åkomma och kan orsaka stora inskränkningar i din vardag. Har du ont i överarm kan det bero på inflammation, artros eller skada på senor och muskler i rotatorkuffen.  En magnetkameraundersökning av överarm kan bidra med en snabb diagnos och möjlighet till rätt behandling och rehabilitering.' },
    {id: 30, name: 'MR Vänster Överarm', price: '4 100kr', title:'Magnetröntgen Överarm', detail: 'Smärta från överarm är en vanlig åkomma och kan orsaka stora inskränkningar i din vardag. Har du ont i överarm kan det bero på inflammation, artros eller skada på senor och muskler i rotatorkuffen.  En magnetkameraundersökning av överarm kan bidra med en snabb diagnos och möjlighet till rätt behandling och rehabilitering.' },
    {id: 31, name: 'MR Höger Underarm', price: '4 100kr', title:'Magnetröntgen Underarm', detail: 'En undersökning med magnetkamera av underarmen kan påvisa skador eller sjukliga förändringar i skelettet eller mjukvävnaden i underarmen. Undersökningen kan även visa om nervbanorna är klämda, som vid karpaltunnelsyndrom, och om det finns pågående inflammatoriska processer i leder, kring muskler eller ligamentfästen. Handen och handleden är ytterst komplexa konstruktioner med några av kroppens mest komplicerade ledsystem. MR är en bra undersökningsmetod för att upptäcka och särskilja frakturer, artrit, skador på ligament och leder i händer och handleder.' },
    {id: 32, name: 'MR Vänster Underarm', price: '4 100kr', title:'Magnetröntgen Underarm', detail: 'En undersökning med magnetkamera av underarmen kan påvisa skador eller sjukliga förändringar i skelettet eller mjukvävnaden i underarmen. Undersökningen kan även visa om nervbanorna är klämda, som vid karpaltunnelsyndrom, och om det finns pågående inflammatoriska processer i leder, kring muskler eller ligamentfästen. Handen och handleden är ytterst komplexa konstruktioner med några av kroppens mest komplicerade ledsystem. MR är en bra undersökningsmetod för att upptäcka och särskilja frakturer, artrit, skador på ligament och leder i händer och handleder.' },
    {id: 33, name: 'MR Höger Handled', price: '4 100kr', title:'Magnetröntgen Handled', detail: 'Handleden är en väldigt komplex struktur av olika ben och leder som kan vinklas och röras i olika ställningar samtidigt som den klarar av att överföra stor kraft. Handleden kan drabbas av skador, inte minst från fallolyckor, samt drabbas av sjukdomar i leder och ligament som förstör motoriken. Skador och anomalier i handleden kan vara svåra att upptäcka samt besvärliga att särskilja då de ofta har likartade symptom. MR är en bra undersökningsmetod för att upptäcka och särskilja frakturer, artrit eller skador på ligament och leder. När du gör en MR av handleden är det viktigt att se till så att handen ligger mitt i tunneln vid själva bildtagningen. ' },
    {id: 34, name: 'MR Vänster Handled', price: '4 100kr', title:'Magnetröntgen Handled', detail: 'Handleden är en väldigt komplex struktur av olika ben och leder som kan vinklas och röras i olika ställningar samtidigt som den klarar av att överföra stor kraft. Handleden kan drabbas av skador, inte minst från fallolyckor, samt drabbas av sjukdomar i leder och ligament som förstör motoriken. Skador och anomalier i handleden kan vara svåra att upptäcka samt besvärliga att särskilja då de ofta har likartade symptom. MR är en bra undersökningsmetod för att upptäcka och särskilja frakturer, artrit eller skador på ligament och leder. När du gör en MR av handleden är det viktigt att se till så att handen ligger mitt i tunneln vid själva bildtagningen. ' },
   // {id: 35, name: 'test', price: '3kr'}
  

  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='main-pricelist'>
    <div className="container-banner">
      
    <div className="container-about-services">
  <div className="custom-row-k">
   
    <div className="custom-description">
    <h3 className="text-center toggle-btn-sub" onClick={() => setIsOpen(!isOpen)}>
             MR(MRI)  <span className={`arrow-sub ${isOpen ? "rotated" : ""}`}>▾</span>
            </h3>
            <div className={`subtext-container ${isOpen ? "open" : ""}`}>
    <p className='subtext-about'>En magnetkamera kan skapa detaljerade bilder av nästan alla organ i kroppen och används för att upptäcka sjukdomar, kartlägga skador och följa upp behandlingar.  

Vid en magnetkameraundersökning (MR) ligger du på en brits inne i en så kallad magnettunnel. Under hela undersökningen har du möjlighet att kommunicera med en sjuksköterska. Undersökningen tar mellan 20 och 45 minuter, och det är viktigt att ligga helt stilla för att bilderna ska bli skarpa. Om du tycker att undersökningen känns obehaglig kan du ta med en vän, och i vissa fall kan lugnande läkemedel erbjudas.  

Till skillnad från röntgen använder magnetkameran magnetfält och radiovågor för att skapa bilder. Eftersom magnetfältet påverkar elektronisk utrustning och magnetiska föremål bör personer med exempelvis pacemaker eller annan elektronisk utrustning i kroppen inte genomgå undersökningen.
    </p>
</div>
    </div>
  </div>
</div>

<div className="container-pricelist">
      <h2 className='center-text fw-3 p-3 mb-4 header' >Prislista Magnetröntgen</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h4>{service.name}</h4>
              <p>Pris: {service.price}</p>
            </div>
         {/* <button className="read-more-btn" onClick={() => handleLearnMore(service)}>Läs mer</button> */}
            <button className="btn-book-now" onClick={() => handleBook(service)}>Boka nu</button>
          </div>
        ))}
      </div>
       <div>
        <div className='grid-deceases'>
          <div className='containers-deceases-info' >
          <h4 className='text-center-info'>För kontrastmedel i samband med MR maila oss innan bokning.  
       Vid intresse maila oss på info@rehabscan.se eller ring 010-210 22 31 </h4>
        </div></div>
      
      </div>
    </div>
    </div>
    </div>
  );
};

export default AnimationBody;





