const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let text;
const translator = new Translator();
suite('Unit Tests', () => {
    suite('toBritishEnglish', () =>{
        test('Traducir Mangoes are my favorite fruit.al inglés británico', function(done){
            text = 'Mangoes are my favorite fruit.';
            assert.equal(translator.toBritishEnglish(text)[1],'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
        });

        test('Traducir I ate yogurt for breakfast.al inglés británico', function(done){
            text = 'I ate yogurt for breakfast.';
            assert.equal(translator.toBritishEnglish(text)[1],'I ate <span class="highlight">yoghurt</span> for breakfast.');
            done();
        });

        test("Traducir We had a party at my friend's condo.al inglés británico", function(done){
            text = "We had a party at my friend's condo.";
            assert.equal(translator.toBritishEnglish(text)[1],`We had a party at my friend's <span class="highlight">flat</span>.`);
            done();
        });

        test("Traducir Can you toss this in the trashcan for me?al inglés británico", function(done){
            text = "Can you toss this in the trashcan for me?";
            assert.equal(translator.toBritishEnglish(text)[1],`Can you toss this in the <span class="highlight">bin</span> for me?`);
            done();
        });

        test("Traducir The parking lot was full.al inglés británico", function(done){
            text = "The parking lot was full.";
            assert.equal(translator.toBritishEnglish(text)[1],`The <span class="highlight">car park</span> was full.`);
            done();
        });

        test("Traducir Like a high tech Rube Goldberg machine.al inglés británico", function(done){
            text = "Like a high tech Rube Goldberg machine.";
            assert.equal(translator.toBritishEnglish(text)[1],`Like a high tech <span class="highlight">Heath Robinson device</span>.`);
            done();
        });

        test("Traducir To play hooky means to skip class or work.al inglés británico", function(done){
            text = "To play hooky means to skip class or work.";
            assert.equal(translator.toBritishEnglish(text)[1],`To <span class="highlight">bunk off</span> means to skip class or work.`);
            done();
        });

        test("Traducir No Mr. Bond, I expect you to die.al inglés británico", function(done){
            text="No Mr. Bond, I expect you to die.";
            assert.equal(translator.toBritishEnglish(text)[1],`No <span class="highlight">Mr</span> Bond, I expect you to die.`);
            done();
        });

        test("Traducir Dr. Grosh will see you now.al inglés británico", function(done){
            text = "Dr. Grosh will see you now.";
            assert.equal(translator.toBritishEnglish(text)[1],`<span class="highlight">Dr</span> Grosh will see you now.`);
            done();
        });

        test("Traducir Lunch is at 12:15 today.al inglés británico", function(done){
            text = "Lunch is at 12:15 today.";
            assert.equal(translator.toBritishEnglish(text)[1],`Lunch is at <span class="highlight">12.15</span> today.`);
            done();
        });
    });

    suite('toAmericanEnglish', () => {
        test("Traducir We watched the footie match for a while.al inglés americano", function(done){
            text = "We watched the footie match for a while.";
            assert.equal(translator.toAmericanEnglish(text)[1],`We watched the <span class="highlight">soccer</span> match for a while.`);
            done();
        });

        test("Traducir Paracetamol takes up to an hour to work.al inglés americano", function(done){
            text = "Paracetamol takes up to an hour to work.";
            assert.equal(translator.toAmericanEnglish(text)[1],`<span class="highlight">Tylenol</span> takes up to an hour to work.`);
            done();
        });

        test("Traducir First, caramelise the onions.al inglés americano", function(done){
            text = "First, caramelise the onions.";
            assert.equal(translator.toAmericanEnglish(text)[1],`First, <span class="highlight">caramelize</span> the onions.`);
            done();
        });

        test("Traducir I spent the bank holiday at the funfair.al inglés americano", function(done){
            text = "I spent the bank holiday at the funfair.";
            assert.equal(translator.toAmericanEnglish(text)[1],`I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
            done();
        });

        test("Traducir I had a bicky then went to the chippy.al inglés americano", function(done){
            text = "I had a bicky then went to the chippy.";
            assert.equal(translator.toAmericanEnglish(text)[1],`I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`);
            done();
        });

        test("Traducir I've just got bits and bobs in my bum bag.al inglés americano", function(done){
            text = "I've just got bits and bobs in my bum bag.";
            assert.equal(translator.toAmericanEnglish(text)[1],`I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
            done();
        });

        test("Traducir The car boot sale at Boxted Airfield was called off.al inglés americano", function(done){
            text = "The car boot sale at Boxted Airfield was called off.";
            assert.equal(translator.toAmericanEnglish(text)[1],`The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
            done();
        });

        test("Traducir Have you met Mrs Kalyani?al inglés americano", function(done){
            text = "Have you met Mrs Kalyani?";
            assert.equal(translator.toAmericanEnglish(text)[1],`Have you met <span class="highlight">Mr.</span>s Kalyani?`);
            done();
        });

        test("Traducir Prof Joyner of King's College, London.al inglés americano", function(done){
            text = "Prof Joyner of King's College, London.";
            assert.equal(translator.toAmericanEnglish(text)[1],`<span class="highlight">Prof.</span> Joyner of King's College, London.`);
            done();
        });

        test("Traducir Tea time is usually around 4 or 4.30.al inglés american", function(done){
            text = "Tea time is usually around 4 or 4.30.";
            assert.equal(translator.toAmericanEnglish(text)[1],`Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
            done();
        });
    });

    suite('Resaltados', () => {
        test("Resaltar la traducción enMangoes are my favorite fruit.", function(done){
            text = "Mangoes are my favorite fruit.";
            assert.equal(translator.toBritishEnglish(text)[1],`Mangoes are my <span class="highlight">favourite</span> fruit.`);
            done();
        });

        test("Resaltar la traducción enI ate yogurt for breakfast.", function(done){
            text = "I ate yogurt for breakfast.";
            assert.equal(translator.toBritishEnglish(text)[1],`I ate <span class="highlight">yoghurt</span> for breakfast.`);
            done();
        });

        test("Resaltar la traducción enWe watched the footie match for a while.", function(done){
            text = "We watched the footie match for a while.";
            assert.equal(translator.toAmericanEnglish(text)[1],`We watched the <span class="highlight">soccer</span> match for a while.`);
            done();
        });

        test("Resaltar la traducción enParacetamol takes up to an hour to work.", function(done){
            text = "Paracetamol takes up to an hour to work.";
            assert.equal(translator.toAmericanEnglish(text)[1],`<span class="highlight">Tylenol</span> takes up to an hour to work.`);
            done();
        });
    });

});
