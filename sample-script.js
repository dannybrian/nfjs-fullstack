document.addEventListener('deviceready', function() {
	StatusBar.overlaysWebView(false);
	StatusBar.hide();
	setTimeout(function() {
		navigator.splashscreen.hide();
	}, 100);
}, false);

var app = new Object;

document.addEventListener('DOMContentLoaded', function() {

// keep it simple with a grid?
var slideZoom = 1.14;
var leftSlide = 826 * slideZoom;
var topSlide = 638 * slideZoom;
var topOffset = 5;
var leftOffset = 5;
    
function getCoord(row, col) {
    return (-(col * leftSlide) + leftOffset) + 'x' + (-(row * topSlide) + topOffset);
}

document.addEventListener("stats", function(e) {
    document.getElementById("players-count").innerHTML = e.stats.total;
    // setTimeout(function() { _removeClass(password, "error"); }, 10);
}, false);

var totalVotes = 0;
    
document.addEventListener("vote", function(e) {
    totalVotes++;
    document.getElementById("votes-count").innerHTML = totalVotes;
}, false);

document.addEventListener("votes", function(e) {
    var votes = e.votes.votes;
    console.log(votes);
    for (var key in votes) {
        for (var vote in votes[key]) {
            totalVotes++;
            document.getElementById("votes-count").innerHTML = totalVotes;
        }
    }
}, false);
        
    
appresent.init({},
    [
        // home
        [
            { meta: { title: 'Multichannel', presenters: [ "Danny Brian", ], reqvotes: 1, numwinners: 2,
                     twitters: [ "dannybrian" ], aside: "Welcome to my session, and thanks for following along!", reset: true }, ignoreAfter: true },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            
            { el: 'map', scale: 0.3, pos: '20x10', transtime: 1000 },
            { el: 'rot-container', scale: 1, pos: '0x0', origin: '50% 50%', rotation: "0", transtime: 1000 },
            { send: { show: ['twitter-buttons'], aside: 'Welcome to our session, and thanks for following along!' }},
            { notes: [ "~ 1 minute per slide." ] }
        ],
        
        // #1 title
        [
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
            { el: 'map', scale: 1.52, pos: '-89x-172', transtime: 1000 },
            { notes: [""]},
        ],

        // #2 g4tp.com
        [
            { el: 'map', scale: slideZoom, pos: getCoord(0, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
            [
                { el: 'app-pic', addclass: 'shown', alwaysDo: true },
                { el: 'lootcrate-pic', addclass: 'shown', alwaysDo: true },
            ],
            { notes: ["This is an interactive presentation. I’d like you to join me! There will be some live quizzes and voting. When you open it, you will see a scorecard in the upper left corner. This is your quiz score, and where you stand next to the others. I’ll have a prize for the winner, which is this box from LootCrate.","Disclaimer"]}
           
        ],
        
        // #3 questions
        [
            { el: 'map', scale: slideZoom, pos:  getCoord(0, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { notes: ["It gives you agile architecture.",
                      "You use the proper CSS3 and JavaScript techniques.",
                      "You need teams who focus on simplicity, interface behaviors, visual feedback."
            ]}
        ],
            
            
        // #4 takaways (question 1)
        [
            { el: 'map', scale: slideZoom, pos: getCoord(0, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
            { send: { hide: ['twitter-buttons'], "vote-prompt": { votegroup: "compliance", question: "Which browser scores highest on most HTML5 compliance tests?", el: "left-pane", shape: "long", options: ["Chrome", "Safari", "Firefox", "Internet Explorer", "Opera"], correct: "Chrome", color: "#7DA178" , response: "Thanks, the game has begun! Answer correctly and quickly to win." }}, delay: 1000, ignoreAfter: true },
            { notes: ["If you’ve ever been in any of my HTML5 presentations before, you’ve seen that I showed examples and videos of successes. I’m going to do less of that here, because I think it’s better to show you examples that are easy to create. So the examples I’ll show you have full source code available by yours truly so that you can learn from them. But also so that you can see examples that aren’t a black box or a vendor working serious code gymnastics to get these results. This is compact and easy.",
                     "First question!"]}
        ],
            
        // #5 deployment flexibility
        [
            { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(1, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'orange' },
            [
                { el: 'map', scale: 3.05, pos: '-79x-2669', transtime: 1000 },
                { el: 'map', scale: 2.5, pos: '-936x-2068', transtime: 1000 },
                { el: 'map', scale: slideZoom, pos: getCoord(1, 0), transtime: 1000 },
            ],
            { notes: ["Yes, it’s true that we’re talking in part about Web pages, or Web apps. But when we talk about HTML5, we’re talking about technology, and a platform. We’re not talking just about Web apps, or the Web browser.",
                     "But let’s be clear here. We’re talking about APPS. We’re talking about modern Web app architecture. Single page applications. PhoneGap. Things that give you the flexibility to deploy to apps stores, or to Web servers, or to CDNs. We’re not talking just about Web pages!",
                     "Let's put the browser aside for a few minutes. I want to be very clear on this point. If I have an HTML5 single-page app in code I have a package with which I can do many different things. I can upload it to a CDN, and serve it from there, since it’s a static asset as far as hosting is concerned. I can serve it from a Web server. I can email it to somebody for them to open locally in a browser, and some email clients will let the app run right there in the email message. And I can embed that code in a WebView component on any operating system I wish as a native app. This is due in part to the fact that mobile make hybrid popular, but also because the rendering engines in most browsers used today are open source."
            ]},
        ],
            
        // #6 defining html5
        [
            { el: 'map', scale: slideZoom, pos: getCoord(1, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'grey' },
            { send: { "vote-prompt": { votegroup: "previousversion", question: "What is the previous version of HTML before HTML5?", el: "right-pane", shape: "long", options: ["HTML 4", "HTML 4.01", "HTML 4.1", "HTML 4.9", ], correct: "HTML 4.01", color: "#a3a298" , response: "Thanks for your answer." }}, delay: 1000, ignoreAfter: true },
            [
                { el: 'map', scale: 2.57, pos: '-2452x-2092', transtime: 1000 },
                 { el: 'map', scale: 2.57, pos: '-3161x-2254', transtime: 1000 },
                { el: 'map', scale: slideZoom, pos: getCoord(1, 1), transtime: 1000 },
                 
            ],
             { notes: ["Let’s talk very briefly about what we mean when we talk about HTML5. We’re talking about a whole collection of different standards. Some of these give us new actual tags in HTML, such as video and canvas. Others give us new JavaScript APIs, such as WebSocket and touch events. And some do both. So it’s important to understand that we’re talking about HTML, CSS, and JavaScript all together. What we’re really talking about here is a generation of new technologies. So when I say “HTML5 is Ready”, I’m not talking about every feature of HTML5. I’m talking about them as a whole. This large body of features is not something that will find completeness, by the way. You can see it already contains deprecated features. There is no timeline of completeness here, rather you have a spectrum you need to think about. "]}
        ],
            
        // #7 the "mobile web"
        [
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(1, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
             [
                 { el: 'map', scale: 2.71, pos: '-4738x-2116', transtime: 1000 },
                 { el: 'map', scale: 2.71, pos: '-4841x-2633', transtime: 1000 },
                 { el: 'map', scale: 2.71, pos: '-5585x-2111', transtime: 1000 },
                 { el: 'map', scale: slideZoom, pos: getCoord(1, 2), transtime: 1000 },
                 
            ],
            { notes: ["Theres a lot about the mobile web that have given it a bad name. One factor is screen resolution on mobile devices, and the fact that graphics created for desktop screens weren’t up to the higher resolution. So we got lots of blurry-looking graphics from raster images.",
            "This one isn’t the browser’s fault, or Web technologies. It’s the device’s fault! Well, more particularly, it’s the developer’s fault for using badly sized images and not vectors. Cuz guess what? HTML5 and CSS perform vector-based rendering. Perfect for mobile!",
            "Cuz look at an iPhone emulator running on a 1920x1080 HD screen. It’s big!",
            "And the browser does not make it easy to emulate app behaviors. For example, full screen interfaces. So a big part of creating a great UX with HTML5 is determining how to take control of the browser, and prevent its default behaviors. These include scaling, zooming, and panning. Think about what happens when you drag or pinch a Web page to reveal the gray background behind it. Browser's fault.",
            "Slow."
            ]}
        ],
            
        // #8 feature rich
        [
            { el: 'map', scale: slideZoom, pos: getCoord(1, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
            { notes: ["We sometimes talk about “Mobile First” as being a good idea because it forces you to target a small size, which automatically should simplify your designs and so forth. But think about this differently: Mobile devices are the most feature-rich of any that people use, with accelerometers and cameras and geolocation. We want to take advantage of these features. For a moment, stop thinking about all the features and think about the ways that people have to interact with a device.",
                      "And of course, we have touch to deal with, which doesn’t always come naturally to the browser. And even where the browser gives you touch events, multitouch and swipe gestures aren’t there, so you need to build them yourself or use a library like the great hammer.js. Note that were talking about base functionality here. We’re not even talking about design yet."
            ]}
        ],
        
        // #9 what's an app?
        [
            { el: 'map', scale: slideZoom, pos: getCoord(2, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { send: { "vote-prompt": { votegroup: "firstdraft", question: "When was the first HTML5 draft published?", el: "right-pane", shape: "long", options: ["2007", "2010", "2012", "2014"], correct: "2007", color: "#e3e3b4" , response: "People associate apps with simplicity." }}, delay: 1000, ignoreAfter: true },
            { hide: 'whatsanapp-ph', noRemove: true },
            { show: 'whatsanapp', addvideo: 'video/whatsanapp.mp4', width: 640, height: 360 },
            [
                
                [
                    { show: 'whatsanapp-ph', alwaysDo: true },
                    { hide: 'whatsanapp', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
            { notes: ["So what's in an app? This is just what normal people think. Gartner has a very helpful definition, but I want to illustrate a point here regarding user perception.",
                     "The reason this is important is because it’s what your sponsors meant when the said, “we want apps!” Some of us just thought they wanted mobilized applications. But they didn’t."
                     ]}
        ],
         
        // #10 apps are different
        [
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(2, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
            { notes: [
                "There are many things that make mobile different than what has come before. And it’s all informed by our expectations of how \"apps\" perform.",
                "Touch, animation, \"at home\" behaviors.",
                "We need to think differently about mobile than we think about other form factors. But HTML5 is up to the task! It’s us who need to use HTML5 differently than we have in the past."
            ]}
        ],
                
        // #11 multichannel is hard
        [
            { el: 'map', scale: slideZoom, pos: getCoord(2, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'grey' },
            { send: { "vote-prompt": { votegroup: "videoelement", question: "What is the correct HTML5 element for playing video?", el: "left-pane", shape: "long", options: ["&lt;video&gt;", "&lt;movie&gt;", "&lt;media&gt;", "&lt;embed&gt;"], correct: "&lt;video&gt;", color: "#a3a298" , response: "This is a multichannel app." }}, delay: 1000, ignoreAfter: true },
            { notes: [
                "And so this is why multichannel is tough to do really well. It’s because doing this all well is a challenge for most organizations even if they are only targeting a single device!",
                "But it’s also because you want to think differently about these form factors, and the things they can do, and the way people want to use them differently in different contexts. A common story I hear is about how annoyed people are to use what is clearly a mobile Web app on a desktop machine.",
                "Please remember: Multichannel is only possible because the runtime is common! That is, if you want common code. There are many ways to go about multichannel, but when we’re talking about Web we’re talking about a common runtime."
            ]}
        ],
        
            
        // #12 framework
        [
            { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(2, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
            { notes: [
                "So one of my recent publications explains exactly how to do this, it’s called \"Build Great Mobile Apps with HTML5\", and I’ll quickly talk through its four components."
            ]},
            [
                { show: 'wb-circle1', alwaysDo: true }
            ]
        ],
        
        // #13 create simple designs
        [
             { send: { "vote-prompt": { votegroup: "oldelement", question: "Which HTML element is no longer supported in HTML5?", el: "right-pane", shape: "long", options: ["&lt;q&gt;", "&lt;menu&gt;", "&lt;font&gt;", "&lt;ins&gt;"], correct: "&lt;font&gt;", color: "#d49292" , response: "This app has a simple design." }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(3, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
            { notes: [ "Whiteboarding and wireframing with patterns. The ultimate fail fast strategy.",
                     "My app by the way. I wanted to prove this was not impossible without a big framework or vendor product."]}
        ],
            
        // #14 flat design
        [
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(3, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
            { notes: [ "Flat design is more than a fad. It’s a good idea because it's easy to build, and easy to use." ]}
        ],
            
        // #15 raster
         [
             { send: { "vote-prompt": { votegroup: "accelerated", question: "Which feature allows animations to be hardware accelerated?", el: "left-pane", shape: "long", options: ["Meta tags", "CSS3 translate3d", "CSS3 easing", "jQuery slide"], correct: "CSS3 translate3d", color: "#ccbfa5" , response: "This app's animations are hardware accelerated." }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(3, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'orange' },
            { notes: ["Use vectors. Or, scale raster files appropriately. But try to use vectors. The new Web technologies do this. Explain \"favor\"",
                      "And by the way, we can’t look good on mobile while using old school Web-safe fonts, either. IMO."]},
             [
                 { el: 'map', scale: 2.15, pos: '-3818x-4468', transtime: 1000 },
                 { el: 'map', scale: slideZoom, pos: getCoord(3, 2), transtime: 1000 },
             ]
         ],
             
        // #16 responsive
         [
              { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(3, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
            { notes: ["You need responsive design just for an interface to look the same on many sizes."]}
         ],
        
         // #17 css
         [
            { el: 'map', scale: slideZoom, pos: getCoord(4, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'grey' },
            { notes: [ "I can’t overstate this. CSS file size is an indicator of project health. Recently saw a 400KB CSS file. Use bootstrap, Sass, and less to help you out."]}
        ],
        
        // #18 implement mobile interface behaviors (back to framework)
        [
            { send: { "vote-prompt": { votegroup: "canvas", question: "What is the purpose of the &lt;canvas&gt; element?", el: "right-pane", shape: "long", options: ["Draggables", "Data binding", "Data storage", "Graphics"], correct: "Graphics", color: "#acd4a7" , response: "This app does not use HTML5 canvas." }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(2, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
             [
                [ { show: 'wb-circle2', alwaysDo: true } ]
            ]
        ],
             
        // #19 mimic native behaviors
        [
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(4, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
            { hide: 'mimic-ph', noRemove: true },
            { show: 'mimic', addvideo: 'video/mimicbehaviors.mp4', width: 640, height: 360, loop: true },
             [   
                [
                    { show: 'mimic-ph', alwaysDo: true },
                    { hide: 'mimic', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
            { notes: ["Users do take note of these subtleties, even if unconsciously. Consider the difference between a pan gesture — dragging across the screen — and a swipe. A swipe is just a drag that releases and \"flings\" something or otherwise implies motion that continues after the gesture.",
                      "From the implementation side, the difference between a drag and a swipe may be one of the speed, direction or duration of the gesture. However, this minor difference could determine whether users know that they can quickly navigate or scroll through content (because a swipe gave them a sense of additional content) or conclude that they have seen everything there is to see and stop using the app without further exploration. Here, failure to implement a proper swipe behavior could lead to instant user disengagement."]}
        ],
             
        // #20 lock down browser
        [
            { send: { "vote-prompt": { votegroup: "slider", question: "Which input type defines a slider control?", el: "left-pane", shape: "long", options: ["slider", "control", "search", "range"], correct: "range", color: "#e3e3b4" , response: "Landscape orientation should make this app full screen on iOS." }}, delay: 1000, ignoreAfter: true },
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(4, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { notes: [
                "This requires a combination of HTML5, CSS3, and JavaScript! You need all three in the right combination. That combination is detailed fully in the document.",
                "HTML metatags allow developers to eliminate pinch to zoom, control default page scaling , change status bar handling (only for Safari on iOS), determine whether a Web app that is docked to the home screen will run in full-screen mode, thus hiding the browser chrome.",
                "With the correct CSS styling, developers can also disable the default selecting of text, control additional scrolling and overflow of content, manage scaling of content, given particular screen dimensions",
                "Lastly, some JavaScript is necessary to prevent the default behaviors for touch events altogether."

            ]}
        ],
            
        // #21 smooth drag
        [
            { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(4, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
            { hide: 'smoothdrag-ph', noRemove: true },
            { show: 'smoothdrag', addvideo: 'video/smoothdrag.mp4', width: 640, height: 360, loop: true },
            [   
               
                [
                    { show: 'smoothdrag-ph', alwaysDo: true },
                    { hide: 'smoothdrag', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
                { notes: ["Smooth animations aren’t enough! You need a drag to feel like a drag, and that requires low-level JavaScript APIs. You can’t do this in CSS OR HTML!",
                          "Browsers do not give developers any way to automatically produce this behavior. HTML5 does add \"drag and drop\" functionality, but this does not allow for the expected drag behaviors seen in native apps, particularly for the most common and valuable case: navigation within the app."
                ]}
        ],
            
        // #22 provide constant visual feedback (back to framework)
        [
            
            { el: 'map', scale: slideZoom, pos: getCoord(2, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
             [
                [ { show: 'wb-circle3', alwaysDo: true } ]
            ]
        ],
            
        // #23 smooth transitions
        [
             { send: { "vote-prompt": { votegroup: "dayone", question: "Which new feature do the HTML5 editors wish had been implemented in HTML 1?", el: "right-pane", shape: "long", options: ["Audio &amp; video", "Error handling", "Canvas", "Callbacks"], correct: "Error handling", color: "#c6d2d4" , response: "We with that, also." }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(5, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
            { hide: 'transitions-ph', noRemove: true },
             { show: 'transitions', addvideo: 'video/transitions.mp4', width: 640, height: 360, loop: true },
             [   
                
                [
                    { show: 'transitions-ph', alwaysDo: true },
                    { hide: 'transitions', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
            { notes: [
                    "When sometimes finger leaves the screen, that’s when you let CSS3 take over and get the really smooth hardware-accelerated animation. Or when you need to show any kind of change on the screen. Use transitions for everything! Never \"pop\" something on the screen.",
                "Apply consistent and appropriate timings to all interface behaviors. Transitions are one example of how \"slowing things down\" is an important aspect of a great mobile UX — users need a little extra time to shift their attention, to recognize changes and to be educated concerning an app's particular mode of interaction. Effective UI behaviors within a mobile app require particular timing for transitions, for button highlights and for sequences of animation."
            ]}
        ],
            
        // #24 icons & splash
        [
             { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(5, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { hide: 'splash-ph', noRemove: true },
            { show: 'splash', addvideo: 'video/splash.mp4', width: 640, height: 360, loop: true },
             [   
                [
                    { show: 'splash-ph', alwaysDo: true },
                    { hide: 'splash', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
             {
                 notes: ["It’s not an app until it has an ion and splash screen. ;)"]
             }
        ],
            
        // #25 agile architecture
        [
           
            { el: 'map', scale: slideZoom, pos: getCoord(2, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
             [
                [ { show: 'wb-circle4', alwaysDo: true } ]
            ],
            { notes: ["An agile architecture is one that helps you adapt to future changes. One reason to favor Web technologies over native for mobile apps is that they provide deployment flexibility; this means that development teams will have several options regarding the distribution of an app as well as improving performance, introducing new features or responding to unforeseen operational constraints. ",
                "The only assumption that is 100% true about both technology and user needs is that they will change. So you can do one of two things: 1. Try to predict and account for the changes, or 2. Architect your app so it’s easy to change regardless of what the change is. Now, guess the success rate of these two models."
            ]}
        ],
            
        // #26 hybrid compatible
        [
           { send: { "vote-prompt": { votegroup: "uiwebview", question: "What is the biggest difference between mobile Safari and UIWebView on iOS?", el: "left-pane", shape: "long", options: ["HTML5 features", "Layout engine", "JavaScript engine", "Touch handling"], correct: "&lt;basefont&gt;", color: "#ccbfa5" , response: "This app is hybrid compatible." }}, delay: 1000, ignoreAfter: true },
            
            { el: 'map', scale: slideZoom, pos: getCoord(5, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'orange' },
            { notes: ["There are others, but these are the three that function essentially as wrappers. You’re writing to the same APIs as you do in the browser, as opposed to writing directly to another API."]}
        ],
            
        // #27 deployment ux comparison
        [
            { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(5, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'grey' },
            [
                { el: 'map', scale: 2.1, pos: '-5686x-6734', transtime: 1000 },
                { el: 'map', scale: 2.1, pos: '-5674x-7256', transtime: 1000 },
                { el: 'map', scale: slideZoom, pos: getCoord(5, 3), transtime: 1000 },
            ],
           { notes: ["Each deployment strategy carries with it subtle UX differences."]}
        ],
            
        // #28 stay compact
        [
            { send: { "vote-prompt": { votegroup: "previousversion", question: "Which browser currently has the <b>poorest</b> HTML5 support?", el: "right-pane", shape: "long", options: ["Chrome", "Safari", "Firefox", "Internet Explorer", "Opera"], correct: "Internet Explorer", color: "#d49292" , response: "Some things never change." }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(6, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
            { notes: ["The performance of mobile apps that are built with HTML5 is heavily affected by the size of its DOM. The larger the DOM, the more difficult it becomes for hardware to effectively render CSS3 transitions and for CSS3 style changes to quickly take effect. On the extreme end of the spectrum, several modern mobile browsers can be caused to crash when CSS3 transforms are used with a particularly large DOM.",
            "Hiding content (for example, CSS \"display: none\") that appears off-screen can remedy this situation for some apps, but even nonrendered content demands precious RAM and even some processing. If your apps require HTML file sizes that approach many dozens of kilobytes or that contain many large images, you will encounter performance troubles or even crashes on some devices. The solution is to keep the DOM small by manipulating it dynamically, adding and removing elements when such a need is anticipated. This will not be a problem for simple apps."]}
        ],
            
        // #29 test!
        [
            { send: { "vote-end": { el: 'right-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(6, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { hide: 'testing-ph', noRemove: true },
            { show: 'testing', addvideo: 'video/testing.mp4', width: 640, height: 360, loop: true },
            [
                
                [
                    { show: 'testing-ph', alwaysDo: true },
                    { hide: 'testing', rmvideo: true, noRemove: true, alwaysDo: true },
                ]
            ],
            { notes: ["Browser stack. HEadleess browsers. Unit tests. On-device testing."]}
        ],
            
        // #30 multichannel implications?
        [
             { send: { "vote-prompt": { votegroup: "dayone", question: "What year did the editor of HTML5 say it would be completed?", el: "left-pane", shape: "long", options: ["2012", "2015", "2018", "2022"], correct: "2022", color: "#acd4a7" , response: "This was the last question, but stay tuned in case you win!" }}, delay: 1000, ignoreAfter: true },
            { el: 'map', scale: slideZoom, pos: getCoord(6, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'green' },
            { notes: ["Yes, we usually mean this. We mean “omni-channel”. And I hope you can see that this is possible but difficult. Most organizations still end up with separate client-side code bases. I’m not saying don’t try. I’m saying get great apps first for a single form factor. Other than that, everything I’ve told you applies to all of these. Why? Because the runtime is common. Thank goodness."]}
        ],
            
        // #31 but this is multichannel too!
        [
            { send: { "vote-end": { el: 'left-pane' }}},
            { el: 'map', scale: slideZoom, pos: getCoord(6, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'blue' },
            { notes: [
                "Don't lose sight of the fact that this is multichannel. These are different form factors! And in fact, the tablet is very different from the phone in spite of common features. Usage patterns."
            ]}
        ],
            
        // #32 and HTML5 lets you leverage in deployment
        [
            { el: 'map', scale: slideZoom, pos: getCoord(7, 0), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'yellow' },
            { notes: [
                "So thinking now back to this graphic. We presume in this case that developers are writing JS, HTML5, and CSS3. However, we’re starting to see these technologies used not as written languages, but as compiler targets. This is not as far off as it might seem. It doesn’t mean we won’t be writing Web code, either. It just speaks to the maturity and power of the HTML5 technologies and browser speed that enable this.",
                "Why is this happening? Because this browser thing is capable, and completely ubiquitous. So why not? Haven’t we always wanted a high performance, common runtime?",
                "It's all about deployment flexibility. That code we wrote for that app? Can we leverage it in a hybrid container? On our desktop site? AIR? Video game? Extreme examples."
            ]}
        ],
            
        // #33 coherent ui
        [
            { el: 'map', scale: slideZoom, pos: getCoord(7, 1), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'grey' },
            { notes: [
                "Edge use cases."
             ]}
        ],
            
        // #34 recommendations
        [
            { el: 'map', scale: slideZoom, pos: getCoord(7, 2), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'orange' },
        ],
            
        // #35 research
        [
            { el: 'map', scale: slideZoom, pos: getCoord(7, 3), transtime: 1000 },
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'body', addclass: 'red' },
        ],

        // winners
        [
            { 'admin-msg': { 'get-winners': true, 'send-codes': true }, },
            { notes: [ "There were 12 questions total."] }
        ],

        // give us a 5!
        [
            { el: 'body', rmclass: 'green red blue yellow orange grey' },
            { el: 'map', scale: 0.2, pos: '188x3', transtime: 2000 },
            // { el: 'map', mscale: 1.5, mpos: '0x0', transtime: 2000 },
            { el: 'title', addclass: 'ended' },
            { send: { aside: "Please give my session a 5.0!<br/><br/>And thanks again for using the app." }, ignoreAfter: true },
            { notes: [ "Your rating for this session helps me to continue to innovate the format and content. Please rate this session!" ] }   
        ]
    ]);

}, false);

