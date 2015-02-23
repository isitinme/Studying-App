$(document).ready(function() {
 $(window).load(function() {
 
  var elem = {
  'Giraffe': 'жираф',
  'Rhino': 'носорог',
  'Pear': 'груша',
  'Plum': 'слива',
  'Peach': 'персик',
  'Grape': 'виноград',
  'Carrot': 'морковь',
  'Cabbage': 'капуста',
  'Eggplant': 'баклажан',
  'Hug': 'обнимать, обьятие',
  'Speak': 'говорить',
  'Sleep': 'спать',
  'Dream': 'мечтать, сон',
  'Fight': 'драка, драться', 
  'Cry': 'плакать',
  'Shout': 'кричать',
  'Catch': 'ловить',
  'Bore': 'скучать',
  'Tell': 'рассказывать',
  'Ugly': 'уродливый',
  'Attractive': 'привлекательный', 
  'Tall': 'высокий',
  'Fat': 'жирный',
  'Horrible': 'ужасный',
  'Flow': 'течь, поток',
  'Flood': 'наводнение, потоп',
  'Weird': 'странный',
  'Special': 'особенный, особый',
  'Ill': 'больной',
  'She': 'она',
  'Well': 'ну, хорошо, хороший',
  'Girl': 'девушка',
  'Always': 'всегда',
  'Fall': 'падать, падение, осень',
  'Down': 'вниз, внизу',
  'Think': 'думать',
  'Just': 'просто, только что, как раз',
  'Love': 'любовь, любить',
  'With': 'с',
  'Her': 'её',
  'Never': 'никогда',
  'Remember': 'помнить',
  'Memorize': 'запоминать',
  'When': 'когда',
  'Try': 'пытаться, пробывать',
  'Succeed': 'преуспевать, достигать цели',
  'Get': 'получать, попасть',
  'What': 'что, какой', 
  'Want': 'хотеть, желать',
  'Need': 'нуждаться, необходимость'
  };
  
  var inter = {
  'Purchase': 'покупка, покупать, приобретение',
  'Apply': 'применять',
  'Regard': 'внимание, рассматривать, считать',
  'Further': 'далее, дальний, дальнейший',
  'Responsive': 'отзывчивый',
  'Suggest': 'предлагать',
  'Apparel': 'одежда',
  'Entirely': 'полностью',
  'Favicon': 'значок',
  'Genuine': 'подлинный, настоящий',
  'Shepherd': 'пастух',
  'Prevent': 'предотвращать',
  'Sleek': 'гладкий',
  'Narrow': 'узкий',
  'Sticky': 'липкий',
  'Spill': 'пролить',
  'Response': 'ответ, реакия, отклик',
  'Occur': 'происходить',
  'Capture': 'захват, захватывать',
  'Insect': 'насекомое',
  'Lean': 'опираться, наклон, худой',
  'Bully': 'хулиган, запугивать',
  'Fancy': 'фантазия, причудливый, симпатия',
  'Behavior': 'поведение',
  'Merely': 'просто',
  'Council': 'совет',
  'Repeatedly': 'неоднократно',
  'Plain': 'простой',
  'Apparent': 'видимый, очевидный',
  'Effort': 'усилие',
  'Attempt': 'попытка',
  'Seek': 'искать',
  'Aim': 'цель',
  'Intention': 'намерение',
  'Endeavor': 'прилагать усилия, стараться, стремление',
  'Exert': 'оказывать, вызывать, влиять',
  'Influence': 'влияние',
  'Stroke': 'ход, удар',
  'Authority': 'власть',
  'Pump': 'насос',
  'Slew': 'множество',
  'Swamp': 'болото',
  'Oven': 'духовка, печь',
  'Glow': 'свечение',
  'Fever': 'лихорадка, жар',
  'Ardor': 'страсть, рвение, пыл',
  'Rigorous': 'строгий, тщательный, точный',
  'Implement': 'осуществлять, выполнять, инструмент',
  'Pertain': 'относиться, принадлежать',
  'Submission': 'представление, подчинение, покорность'
  };
 
  var set1 = {
   'Humility': 'смирение', 
   'Redemption': 'искупление', 
   'Thread': 'нить',
   'Clash': 'столкновение',
   'Benefit': 'польза, выгода',
   'Welfare': 'благосостояние',
   'Grade': 'класс, сорт',
   'Pretense': 'притворство, отговорка',
   'Rebellion': 'восстание, мятеж',
   'Treatment': 'обращение, лечение',
   'Probation': 'стажировка',
   'Conscience': 'совесть',
   'Trait': 'особенность',
   'Dorm': 'спальня',
   'Crust': 'кора',
   'Scathe': 'вред, ущерб',
   'Indictment': 'обвинение',
   'Scribe': 'писец',
   'Whip': 'кнут',
   'Disregard': 'принебрежение',
   'Barn': 'сарай',
   'Execuse': 'оправдание, предлог',
   'Scheme': 'схема, система',
   'Odor': 'запах',
   'Facility': 'обьект',
   
   'Neat': 'аккуратный',
   'Pious': 'благочестивый',
   'Certain': 'определенный, уверенный',
   'Arbitrary': 'произвольный',
   'Explicit': 'явный',
   'Malign': 'пагубный',
   'Either': 'любой',
   'Relevant': 'уместный',
   'Tiresome': 'утомительный',
   'Enormous': 'огромный',
   'Insecure': 'небезопасный',
   'Rugged': 'прочный',
   'Arrogant': 'высокомерный',
   'Hypocritical': 'лицемерный',
   'Filthy': 'грязный',
   'Vibrant': 'яркий',
   'Neuter': 'средний, нейтральный',
   'Ferocious': 'свирепый',
   'Violent': 'насильственный',
   'Weary': 'утомленный',
   'Controversial': 'спорный',
   'Abrasive': 'резкий',
   'Zealous': 'ревностный',
   'Devout': 'набожный',
   'Fierce': 'жестокий',
   
   'Oversee': 'наблюдать',
   'Span': 'охватывать',
   'Stoop': 'нагибаться',
   'Tremble': 'дрожать',
   'Stumble': 'споткнуться',
   'Disown': 'отрекаться',
   'Pour': 'лить, поливать',
   'Crave': 'жаждать',
   'Redeem': 'выкупать',
   'Abuse': 'злоупотреблять',
   'Pursue': 'преследовать',
   'State': 'констатировать, утверждать',
   'Fit': 'подходить, соответствовать',
   'Fester': 'гноиться, мучиться',
   'Devastate': 'опустошать',
   'Betray': 'предавать',
   'Embarrass': 'смущать, стеснять',
   'Resent': 'возмущаться, обижаться',
   'Despise': 'презирать',
   'Gnaw': 'грызть, глодать',
   'Refuse': 'отказываться',
   'Rip': 'рвать',
   'Rouse': 'будить, пробуждаться',
   'Annoy': 'раздражать',
   'Investigate': 'исследовать',
   
   'Thus': 'таким образом',
   'Slightly': 'немного',
   'Behalf': 'от имени',
   'Sharp': 'резко',
   'Unbearable': 'невыносимо',
   'Quite': 'довольно, вполне',
   'Pinpoint': 'точно',
   'Amid': 'среди',
   'Seemingly': 'по видимому',
   'Yet': 'все же, тем не менее',
   'Occasionally': 'иногда',
   'Humbly': 'смиренно',
   'Respectively': 'соответственно',
   'Essentially': 'по существу, по сути',
   'Whereas': 'в то время как',
   'Ideally': 'идеально',
   'Unlike': 'в отличие от',
   'Barely': 'едва',
   'Obviously': 'очевидно, явно',
   'Eventually': 'в конечном счете',
   'Regardless': 'не смотря на',
   'Gradually': 'постепенно',
   'Subsequently': 'в последствии',
   'Entirely': 'полностью',
   'Explicitly': 'ясно, недвусмысленно'
  };
  
  var set2 = {
   // Nouns:
   'Constraint': 'принуждение, ограничение',
   'Precision': 'точность',
   'Adolescent': 'подросток',
   'Prey': 'добыча, жертва',
   'Stem': 'стебель, ствол',
   'Clay': 'глина',
   'Accountability': 'подотчетность',
   'Commitment': 'обязательство',
   'Deity': 'божество',
   'Depiction': 'описание',
   'Gear': 'передача',
   'Blend': 'смесь',
   'Catalyst': 'катализатор',
   'Span': 'диапазон',
   'Gratitude': 'благодарность',
   'Narrative': 'повествование',
   'Occasion': 'случай',
   'Rubber': 'резина',
   'Tithe': 'десятина',
   'Eulogy': 'панегирик',
   'Stoop': 'сутулость',
   'Grin': 'усмешка',
   'Can': 'жестянка, балончик',
   'Block': 'квартал',
   'Headlight': 'фара',

    // Adjectives:
   'Outward': 'внешний',
   'Internal': 'внутренний',
   'Tidy': 'опрятный',
   'Obsolete': 'устаревший',
   'Essential': 'необходимый, существенный',
   'Spectacular': 'захватывающий',
   'Bland': 'мягкий',
   'Versatile': 'разносторонний, гибкий',
   'Comprehensive': 'всесторонний',
   'Ambiguous': 'двусмысленный',
   'Robust': 'крепкий',
   'Proper': 'надлежащий, правильный',
   'Subsequent': 'последующий',
   'Implicit': 'неявный',
   'Precise': 'точный',
   'Nasty': 'противный',
   'Pungent': 'острый',
   'Engage': 'привлекательный',
   'Approximate': 'приблизительный',
   'Bare': 'голый',
   'Prior': 'предшествующий',
   'Futile': 'бесполезный',
   'Obscure': 'неясный, непонятный',
   'Conventional': 'обычный, традиционный',
   'Vicarious': 'чужой',

   // Verbs
   'Melt': 'расплавиться, плавить',
   'Insecure': 'небезопасный',
   'Suppose': 'предполагать',
   'Dupe': 'обманывать',
   'Sanitize': 'дизенфицировать',
   'Rail': 'ругаться, ругать',
   'Scathe': 'вредить, уничтожать',
   'Persecute': 'преследовать',
   'Elude': 'ускользать, избегать',
   'Impose': 'навязывать',
   'Determine': 'определять',
   'Fulfill': 'выполнять',
   'Roar': 'реветь, рычать',
   'Tame': 'приручать',
   'Tread': 'наступать, идти',
   'Sprinkle': 'посыпать',
   'Condemn': 'осуждать',
   'Mold': 'формировать',
   'Liken': 'уподоблять, сравнивать',
   'Quench': 'гасить, тушить',
   'Interact': 'взаимодействовать',
   'Blaze': 'полыхать',
   'Estimate': 'оценивать',
   'Remedy': 'исправлять',
   'Comprehend': 'понимать, постигать',

   // Mix:
   'Sanctuary': 'святилище',
   'Casket': 'шкатулка',
   'Pine': 'сосна',
   'Pulpit': 'кафедра',
   'Favor': 'одолжение, польза',
   'Hygiene': 'гигиена',
   'Coincidence': 'совпадение',
   'Napkin': 'салфетка',
   'Distracktion': 'отвлечение, безумие, рассеяность',                            
   'Vital': 'жизненноважный',
   'Prospective': 'преполагаемый',
   'Hectic': 'беспокойный',
   'Passionate': 'страстный',
   'Ongoing': 'постоянный',
   'Extinct': 'вымерший',
   'Reconcile': 'согласовать',
   'Omit': 'пропускать',
   'Boast': 'хвастаться',
   'Consider': 'рассматривать, считать',
   'Clarify': 'прояснить',
   'Constrain': 'сдерживать, ограничивать',
   'Adhere': 'придерживаться',
   'Rely': 'полагаться, надеяться',
   'Cause': 'вызывать, причинять',
   'Acknowledge': 'признавать',
   'Resolve': 'решать'
};
  
  var set3 = {
  'Urge': 'побуждать, убеждать',
  'Consider': 'считать',
  'Appropriate': 'соответствующий',
  'Anticipate': 'предвидеть',
  'Purge': 'чистка, очищать',
  'Enhance': 'увеличивать, усиливать',
  'Gradually': 'постепенно',
  'Specify': 'указывать',
  'Conscious': 'сознательный',
  'Tease': 'дразнить',
  'Alias': 'псевдоним',
  'Insignificant': 'незначительный',
  'Subsequent': 'последующий',
  'Subsequentelly': 'в последствии',
  'Distinction': 'различие',
  'Ought': 'должен',
  'Abhor': 'ненавидеть',
  'Ally': 'союзник',
  'Yield': 'доходность, приносить, уступать',
  'Prompt': 'быстрый, подсказывать, побуждать',
  'Prohibit': 'запрещать',
  'Addicted': 'зависимый',
  'Assignment': 'назначение',
  'Pledge': 'залог, обещание',
  'Soluble': 'разрешимый',
  
  'Persistent': 'постоянный, стойкий',
  'Engulf': 'поглощать', 
  'Mockery': 'издевательство',
  'Solace': 'утешение',
  'Ante': 'ставка',
  'Caveat': 'предостережение',
  'Compound': 'соединение',
  'Convention': 'соглашение',
  'Mandatory': 'обязательный',
  'Distinguish': 'различать',
  'Precede': 'предшествовать',
  'Maintain': 'поддерживать',
  'Peer': 'равный',
  'Magnificent': 'великолепный',
  'Bound': 'связанный, граница',
  'Tissue': 'ткань',
  'Severe': 'тяжелый',
  'Agitation': 'возбуждение, перемешивание, агитация',
  'Bloodbath': 'бойня, резня',
  'Bribe': 'взятка',
  'Nap': 'дремота',
  'Bun': 'булочка',
  'Pan': 'кастрюля, сковорода',
  'Orphan': 'сирота',
  'Receipt': 'получение, квитанция',
  
  'Offense': 'обида, преступление, оскорбление',
  'Babble': 'лепет, болтовня, бормотание',
  'Needle': 'игла',
  'Astonish': 'удивлять, изумлять',
  'Defy': 'игнорировать',
  'Atone': 'искуплять, компенсировать, заглаживать',
  'Ensure': 'обеспечивать, гарантировать',
  'Facilitate': 'способствовать',
  'Boldly': 'смело, нагло',
  'Fairly': 'довольно, достаточно',
  'Frank': 'искренний',
  'Evaluate': 'оценить, оценивать',
  'Tedious': 'утомительный, скучный',
  'Fewer': 'меньше',
  'Plague': 'чума, бедствие, беспокоить',
  'Acclaim': 'признание, приветствовать',
  'Express': 'выражать',
  'Squeeze': 'сжатие, выжимать',
  'Hold': 'удерживать, держать',
  'Appreciate': 'ценить, оценивать',
  'Behind': 'за, позади, сзади',
  'Request': 'просьба, запрос',
  'Drop': 'падение, падать, уронить',
  'Toward': 'по направлению к',
  'Toddler': 'малыш, ползунок',
  'Yawn': 'зевота, зевать',
  'Slouch': 'сутулость, лентяй',
  'Stealthy': 'скрытый, тайный, невидимый',
  
  'Stalk': 'стебель, подкрадываться, шествовать',
  'Stride': 'шагать',
  'Draw': 'жеребьевка, ничья, рисовать, привлечь',
  'Flush': 'вспыхнуть, румянец',
  'Fervent': 'горячий, пылкий',
  'Lest': 'чтобы не, как бы не',
  'Allure': 'очарование',
  'Choke': 'душить, задыхаться',
  'Cease': 'прекращение, прекращать',
  'Dormant': 'спящий, дремлющий',
  'Malice': 'злоба, злость',
  'Resentment': 'негодование, возмущение, обида',
  'Shrink': 'сокращать, сокращаться, уклоняться',
  'Enfold': 'обнимать, обхватывать, окутывать',
  'Vastness': 'простор, ширь',
  'Coax': 'уговаривать, задобрить',
  'Cloth': 'ткань, полотно',
  'Congregation': 'собрание, община',
  'Lap': 'колени, круг, этап',
  'Sermon': 'проповедь, поучение',
  'Spot': 'пятно, место, определить',
  'Shortcoming': 'недостаток, дефект, проступок',
  'Mingle': 'смешивать, смешиваться',
  'Deliverance': 'избавление, освобождение',
  'Delivery': 'доставка, поставка'
  };
  
  var elemArr = Object.keys(elem);
  var interArr = Object.keys(inter);
  var set1Arr = Object.keys(set1);
  var set2Arr = Object.keys(set2);
  var set3Arr = Object.keys(set3);
  
  
  
  var sel = $('#select');
  var input = $('#enterWord').val();
  var chosenMode = 'Elementary';
 
// GET MODE

 sel.change(function() {
  chosenMode = $('option:selected').val();
 });
  
 $('input[type="text"]').focus(function() {
  $(this).val('');
 });
  
// START

  $('#start').click(function() {
  
   switch(chosenMode) {
    case 'Elementary':
	 rand = Math.floor(Math.random()*50);
     arrRand = elemArr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Intermediate':
	 rand = Math.floor(Math.random()*50);
     arrRand = interArr[rand];
	 $('h2').text(arrRand);
	 break;
    case 'Set 1':
     rand = Math.floor(Math.random()*100);
	 arrRand = set1Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Set 2':
     rand = Math.floor(Math.random()*100);
	 arrRand = set2Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Set 3':
     rand = Math.floor(Math.random()*103);
	 arrRand = set3Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Custom':
	 var l = engWordz.length;
     rand = Math.floor(Math.random()*l);
     $('h2').html(engWordz[rand]);
	default:
	 return;
   }
   
   $('#down').removeClass('true false');
   $('input[type="text"]').val('');
  });
  
// CHECK

$('#check').click(function() {
  
  $('#down').removeClass('true false');
   word = $('input[type="text"]').val();
   word = word.toLowerCase();
  
  
  switch(chosenMode) {
   case 'Elementary':
    foo = elem[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	break;
   case 'Intermediate':
    foo = inter[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	break;
   case 'Set 1':
	foo = set1[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Set 2':
	foo = set2[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Set 3':
	foo = set3[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Custom':
	 x = $('h2').html();
     foo = localStorage.getItem(x);
 
     if(word == foo) {
      $('#down').addClass('true');
	  return;
     } else {
      $('#down').addClass('false');
	  return;
     }
	 break;
	default:
	 return;
  }
   
});
 
// GIVE UP

 $('#giveUp').click(function() {
   
  switch(chosenMode) {
   case 'Elementary':
    $('#enterWord').val(elem[arrRand]);
	break;
   case 'Intermediate':
    $('#enterWord').val(inter[arrRand]);
	break;
   case 'Set 1':
    $('#enterWord').val(set1[arrRand]);
	break;
   case 'Set 2':
    $('#enterWord').val(set2[arrRand]);
	break;
   case 'Set 3':
    $('#enterWord').val(set3[arrRand]);
	break;
   case 'Custom':
    x = $('h2').html();
    foo = localStorage.getItem(x);
    $('#enterWord').val(foo);
	break;
   default:
    return;
  }
  
});


// KEY DOWN

$('#enterWord').keydown(function(e) {

 switch(parseInt((e.which),10)) {
  case 13:
   $('#down').removeClass('true false');
   word = $('input[type="text"]').val();
   word = word.toLowerCase();
   
  
  switch(chosenMode) {
   case 'Elementary':
   foo = elem[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	break;
   case 'Intermediate':
    foo = inter[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	break;
   case 'Set 1':
	foo = set1[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Set 2':
	foo = set2[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Set 3':
	foo = set3[arrRand];
	
	var fooArr = foo.split(', ');
	
	for(var i=0; i<fooArr.length; i++) {
	 if(word == fooArr[i]) {
	  $('#down').addClass('true');
	  return;
	 } else {
	  continue;
	 }
	}
	 $('#down').addClass('false');
	 break;
	case 'Custom':
	 x = $('h2').html();
     foo = localStorage.getItem(x);
 
     if(word == foo) {
      $('#down').addClass('true');
	  return;
     } else {
      $('#down').addClass('false');
	  return;
     }
	 break;
	default:
	 return;
  }
  
  break;
  case 17:
   
   switch(chosenMode) {
    case 'Elementary':
	 rand = Math.floor(Math.random()*50);
	 arrRand = elemArr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Intermediate':
	 rand = Math.floor(Math.random()*50);
	 arrRand = interArr[rand];
	 $('h2').text(arrRand);
	 break;
    case 'Set 1':
     rand = Math.floor(Math.random()*100);
	 arrRand = set1Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Set 2':
     rand = Math.floor(Math.random()*100);
	 arrRand = set2Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Set 3':
     rand = Math.floor(Math.random()*103);
	 arrRand = set3Arr[rand];
	 $('h2').text(arrRand);
	 break;
	case 'Custom':
	 var l = engWordz.length;
     rand = Math.floor(Math.random()*l);
     $('h2').html(engWordz[rand]);
	default:
	 return;
   }
   
   $('#down').removeClass('true false');
   $('input[type="text"]').val('');
   
  break;
  default:
  break;
 }
 
});


// Customize
function customize() {

 var btn = $('#saveCustom');
 engWordz = [];
 rusWordz = [];
 
 $(btn).click(function() {
  var eng = $('#newEngWord').val();
  var rus = $('#newRusWord').val();
 
  localStorage.setItem(eng, rus);
 });
 
 for(var prop in localStorage) {
   engWordz.push(prop);
   rusWordz.push(localStorage[prop]);
  }
 
}

customize();

// Show Custom List

$('#showList').click(function() {
 
 $('#list').fadeToggle('slow');
 
  if($('#list p').html() != '') {
   $('#list p').empty();
  }
 
 var textIt = function(l) {
  
  if(l > 0) {
   
   $('#list p').append(engWordz[l - 1] + ' | ');
   l--;
   textIt(l);
  } 
  return;
 }
 
 textIt(engWordz.length);
 
});

// Remove item




 });
});