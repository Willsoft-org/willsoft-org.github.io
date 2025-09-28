+++
title = "The Lento Programming Language"
date = 2024-10-20T15:12:37+02:00
hideLogo = true
+++

<section class="default large">
    <div class="container">
        <div class="ui grid landing">
            <div class="eight wide column">
                <h1>Welcome to the Lento Programming Language!</h1>
                <p>
                    An enjoyable functional programming language that aims to purify the object-oriented paradigm.
                </p>
                <p>
                    <a href="/docs"><button class="ui positive basic button">Learn more</button></a>
                </p>
            </div>
            <div class="eight wide column landing-logo">
                <svg class="logo" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="37 38 170 205">
<g fill="#2f292c">
<path d="M39 240.1 c0 -0.9 47.9 -125.7 50 -130.3 0.7 -1.5 1.7 -2.5 2.1 -2.2 0.5 0.2 2.3 3.2 4 6.5 6.7 12.4 24 25 42.6 31 l7.1 2.2 6.9 -2.2 c20.2 -6.8 36.9 -19.6 44.1 -33.8 4 -7.8 4.6 -6.7 3.9 6.8 -1.4 27.2 -8.5 50.7 -21.3 69.9 -5 7.6 -20.5 23 -28.1 27.9 -2.9 1.9 -5.3 3.6 -5.3 3.8 0 0.2 2 4.4 4.5 9.3 2.5 4.9 4.5 9.2 4.5 9.5 0 0.3 -3.9 0.4 -8.7 0.3 l-8.8 -0.3 -8.3 -16.4 -8.4 -16.4 1.4 -4.6 c1.7 -6 1.8 -31.8 0.1 -34.6 -1.1 -1.7 -1.2 -1.4 -1.3 3 -0.1 10.7 -4.4 24.9 -11.1 36.3 -5.5 9.2 -18 21.1 -27.4 25.9 -9.8 5 -12.8 5.9 -24.1 7.8 -10 1.6 -18.4 1.9 -18.4 0.6z"></path>
<path d="M167.1 228.9 l-5.3 -10.1 6 -6 6 -6 7.5 14.3 c10.5 20 10.5 17.9 0.1 17.9 l-8.9 0 -5.4 -10.1z"></path>
<path d="M142.8 124.2 c-4.5 -5.1 -5.1 -12 -1.5 -17.3 1.2 -1.9 2.7 -3.4 3.2 -3.4 0.5 0 2 1.5 3.2 3.4 3.6 5.4 2.7 14.1 -2 17.9 -1.1 0.9 -1.7 0.8 -2.9 -0.6z"></path>
<path d="M115.5 104.1 c-4 -1.8 -6 -5.1 -6 -10.2 0 -4 0.5 -5.4 2.8 -7.6 2.3 -2.3 3.6 -2.8 7.7 -2.8 4.1 0 5.4 0.5 7.7 2.8 2.3 2.3 2.8 3.6 2.8 7.7 0 4 -0.5 5.5 -2.6 7.6 -2.8 2.8 -8.9 4 -12.4 2.5z"></path>
<path d="M164.5 104.1 c-4 -1.8 -6 -5.1 -6 -10.2 0 -4 0.5 -5.4 2.8 -7.6 2.3 -2.3 3.6 -2.8 7.7 -2.8 4.1 0 5.4 0.5 7.7 2.8 2.3 2.3 2.8 3.6 2.8 7.7 0 4 -0.5 5.5 -2.6 7.6 -2.8 2.8 -8.9 4 -12.4 2.5z"></path>
<path d="M142.7 85.5 c-2.5 -5.3 -8.8 -11.6 -13.6 -13.8 -3.4 -1.5 -7.8 -2.1 -18.5 -2.6 -7.8 -0.4 -15.1 -1.2 -16.3 -1.9 -3.4 -1.9 -6.3 -6.2 -6.3 -9.3 l0 -2.9 9 0 c8.9 0 9 0 14.2 -4 11 -8.3 27.3 -12.4 41.1 -10.2 9.7 1.5 18.8 5.2 25.5 10.2 5.2 4 5.3 4 14.2 4 l9 0 0 2.9 c0 3.1 -2.9 7.4 -6.3 9.3 -1.2 0.7 -8.5 1.5 -16.3 1.9 -19.2 0.9 -24.9 3.7 -31.7 15.6 l-2.3 4.3 -1.7 -3.5z"></path>
</g>
</svg>					<h1>Lento</h1>
            </div>
        </div>
    </div>
</section>
<section class="blue">
    <div class="container two column stackable ui grid">
		<div class="column">
			<h2 class="underlined">What is Lento?</h2>
			<p>
				Lento is a programming language that is designed to be easy to learn and use.
				Our main goal is to make code <b>expressive</b>, <b>concise</b>, <b>readable</b>, and <b>fun to write</b>.
			</p>
			<p>
				Lento is an open-source, strongly typed and lazy evaluated programming language.<br>
				Types provide a way to describe the shape of an object, providing better documentation, and allowing Lento to validate that your code is working correctly.
				Writing types can be optional in Lento due to type inference, which allows you to get a lot of power without writing any additional code.
			</p>
		</div>
        <div class="column">
			<h2>Examples</h2>
			<div class="ui styled fluid accordion">
				<div class="title active">
					Hello World
				</div>
				<div class="content active">
<pre><code class="language-lento">print "Hello, World!"</code></pre>
				</div>
				<div class="title">
					Functions
				</div>
				<div class="content">
<pre><code class="language-lento">add : int -> int -> int
add a b = a + b
++
layout = "willsoft"
title = "Home"
heroTitle = "Software"
heroLead = "IT Consulting and Development"
heroClass = "landing"
heroButtons = [
    { text = "Our Products", href = "/products/", class = "btn btn-white btn-lg btn-scale pulse" },
    { text = "Our Services", href = "/services/", class = "btn btn-purple btn-lg btn-scale btn-normal-weight pulse" }
]
heroSub = "<b>The</b> company to build all your apps and websites with."
+++

<h1 class="willsoft">Welcome to Willso<span>ft</span></h1>
<p>
We are a software development and consulting company. We provide tailored solutions and services to small and medium-sized
businesses. We specialize in desktop, web and mobile development.
Fortified by strategic software consulting, Willsoft enable businesses to transform their digital landscape.
We are committed to providing high-quality products and services that help our clients achieve their goals.
Understanding the needs of our clients, we deliver innovative solutions that meet their demands.
</p>
<div id="partners-display">
    <img src="/assets/partners/ms.png" alt="Microsoft Partners">
    <img src="/assets/partners/ibm.png" alt="IBM">
    <img src="/assets/partners/yc.png" alt="Y Combinator">
    <img src="/assets/partners/kth.png" alt="KTH" style="height:100px;margin:0 20px;">
</div>
<div class="tagline-box bg-blue-light adjust-lighter-4 mb20 mt20">
    <p class="title">Everyting IT<sup class="sup-tm">TM</sup></p>
    <p class="body">
        Our wide range of expertise from acedemia and collective professional experience allow us to produce software in any
        area, field or category. We are dedicated to delivering innovative IT solutions that meet the diverse needs of our clients.
    </p>
    <div style="text-align: right"><em>- We can do IT!</em></div>
</div>
<div class="split-container mt32 mb32">
    <div class="content-section">
        <h3>Our Goal</h3>
        Our goal is to <b>help you succeed</b> by providing you with best possible service and the tools you need to grow your business.
        We work closely with our clients to develop solutions that help them achive their goals.
    </div>
    <div class="content-section">
        <h3>Our Expertise</h3>
        We are a team of <b>highly skilled software developers and designers</b> who are passionate about what we do.
        We pride ourselves on our ability to deliver high-quality work on time and within budget.
    </div>
    <div class="content-section">
        <h3>Our Craft</h3>
        As IT solutions provider, Willsoft delivers comprehensive services in software <b>consulting and customized product development</b>.
        Crafting innovative solutions, designed to empower small and medium-sized enterprises.
    </div>
</div>
<p>
Whether you are looking for a new website or mobile app, we can help!
Contact us today for more information about how we can help you grow your business!
</p>
<div class="fg-white mt10">
    <a class="btn btn-purple btn-lg pulse bg-blue-light" href="/contact/">Contact us!</a>
</div>
}
</code></pre>
				</div>
            </div>
        </div>
    </div>
</section>
<section class="default">
    <div class="container">
        <h2 class="underlined">Why Lento?</h2>
        <div class="three column row ui grid responsive mt-10">
            <div class="column">
                <h2>Performance</h2>
                <p>
                    Lento is blazingly fast and memory-efficient: with no runtime or
                    garbage collector, it can power performance-critical services, run on
                    embedded devices, and easily integrate with other languages.
                </p>
            </div>
            <div class="column">
                <h2>Reliability</h2>
                <p>
                    Lento’s rich type system enable you to eliminate lots of bugs at
                    compile-time long before running in production.
                </p>
            </div>
            <div class="column">
                <h2>Productivity</h2>
                <p class="f3 lh-copy">
                    Lento has great documentation, a friendly compiler with useful error
                    messages, and top-notch tooling — an integrated package manager
                    and build tool, smart multi-editor support with auto-completion and
                    type inspections, an auto-formatter, and more.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="green">
    <div class="container">
        <h2 class="underlined">Cross-platform</h2>
        <div class="two column row ui grid responsive mt">
            <div class="column">
                <h2>Native</h2>
                <p>
                    Run your code natively on any platform.<br>
                    Lento can compile to blazingly fast and memory-efficient native executable machine code running on every major operating system.
                </p>
                <div class="space-even">
                    <span class="logo-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Windows</title><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"></path></svg></span>
                    <span class="logo-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Linux</title><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"></path></svg></span>
                    <span class="logo-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ubuntu</title><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm3.279 17.68c-.766.441-1.029 1.422-.586 2.189.441.765 1.422 1.028 2.188.584.766-.441 1.029-1.422.585-2.189-.441-.765-1.421-1.028-2.187-.584zm-3.279-1c-.705 0-1.373-.157-1.971-.435L8.916 18.24c.93.459 1.978.721 3.084.721.646 0 1.268-.091 1.86-.256.104-.643.485-1.234 1.095-1.587.609-.351 1.313-.386 1.92-.156 1.186-1.163 1.957-2.749 2.07-4.515l-2.285-.033c-.21 2.391-2.215 4.266-4.66 4.266zM7.32 12c0-1.583.787-2.981 1.99-3.83L8.14 6.209c-1.404.93-2.445 2.369-2.881 4.035.506.404.83 1.034.83 1.74 0 .704-.324 1.319-.83 1.739.436 1.665 1.477 3.104 2.881 4.034l1.17-1.965C8.107 14.97 7.32 13.574 7.32 12zm-3.48-1.602c-.885 0-1.602.717-1.602 1.602s.717 1.602 1.602 1.602S5.441 12.885 5.441 12s-.716-1.602-1.601-1.602zM12 7.32c2.445 0 4.45 1.875 4.66 4.265l2.285-.034c-.113-1.765-.885-3.35-2.07-4.516-.609.232-1.313.194-1.92-.154-.609-.352-.99-.945-1.095-1.591-.594-.16-1.214-.25-1.86-.25-1.11 0-2.155.26-3.084.72l1.113 1.995c.6-.279 1.268-.435 1.971-.435zm3.279-1.001c.765.442 1.746.181 2.189-.585.441-.765.181-1.746-.588-2.19-.765-.44-1.746-.179-2.189.589-.441.764-.18 1.744.588 2.186z"></path></svg></span>
                    <span class="logo-icon" style="width: 65px"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>macOS</title><path d="M0 14.727h.941v-2.453c0-.484.318-.835.771-.835.439 0 .71.276.71.722v2.566h.915V12.25c0-.48.31-.812.764-.812.46 0 .718.28.718.77v2.518h.94v-2.748c0-.801-.517-1.334-1.307-1.334-.578 0-1.054.31-1.247.805h-.023c-.147-.514-.552-.805-1.118-.805-.545 0-.968.306-1.142.771H.903v-.695H0v4.006zm7.82-.646c-.408 0-.68-.208-.68-.537 0-.318.26-.522.714-.552l.926-.057v.307c0 .483-.427.839-.96.839zm-.284.71c.514 0 1.017-.268 1.248-.703h.018v.639h.908v-2.76c0-.804-.647-1.33-1.64-1.33-1.021 0-1.66.537-1.701 1.285h.873c.06-.332.344-.548.79-.548.464 0 .748.242.748.662v.287l-1.058.06c-.976.061-1.524.488-1.524 1.199 0 .721.564 1.209 1.338 1.209zm6.305-2.642c-.065-.843-.719-1.512-1.777-1.512-1.164 0-1.92.805-1.92 2.087 0 1.3.756 2.082 1.928 2.082 1.005 0 1.697-.59 1.772-1.485h-.888c-.087.453-.397.725-.873.725-.597 0-.982-.483-.982-1.322 0-.824.381-1.323.975-1.323.502 0 .8.321.876.748h.889zm2.906-2.967c-1.591 0-2.589 1.085-2.589 2.82 0 1.735.998 2.816 2.59 2.816 1.586 0 2.584-1.081 2.584-2.816 0-1.735-.997-2.82-2.585-2.82zm0 .832c.971 0 1.591.77 1.591 1.988 0 1.213-.62 1.984-1.59 1.984-.976 0-1.592-.77-1.592-1.984 0-1.217.616-1.988 1.591-1.988zm2.982 3.178c.042 1.006.866 1.626 2.12 1.626 1.32 0 2.151-.65 2.151-1.686 0-.813-.469-1.27-1.576-1.523l-.627-.144c-.67-.158-.945-.37-.945-.733 0-.453.415-.756 1.032-.756.623 0 1.05.306 1.096.817h.93c-.023-.96-.817-1.61-2.019-1.61-1.187 0-2.03.653-2.03 1.62 0 .78.477 1.263 1.482 1.494l.707.166c.688.163.967.39.967.782 0 .454-.457.779-1.115.779-.665 0-1.167-.329-1.228-.832h-.945z"></path></svg></span>
                </div>
                <h2>Build</h2>
                <div class="four column ui doubling grid">
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-terminal"></i>
                            Command Line
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-desktop"></i>
                            Desktop Apps
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-mobile-alt"></i>
                            &nbsp;Mobile&nbsp; Apps
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-cubes"></i>
                            Package Manager
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-robot"></i>
                            Machine Learning
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-cloud"></i>
                            Edge Computing
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-microchip"></i>
                            Embedded Systems
                        </h4>
                    </div>
                    <div class="column">
                        <h4 class="title-icon-ontop">
                            <i class="fas fa-bolt"></i>
                            High Performance
                        </h4>
                    </div>
                </div>
            </div>
            <div class="column">
                <h2>Web</h2>
                <h3 class="title-icon-together">
                    <span class="logo-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg></span>
                    <span>JavaScript</span>
                </h3>
                <p>
                    Build safe and robust websites using Lento with direct access to JavaScript functions using our advanced interoperability system.<br/>
                    Automatically write binding code between <b>Lento</b>, <b>WebAssembly</b>, and <b>JavaScript</b> APIs.
                    Take advantage of libraries like <code>js</code> that provide pre-packaged bindings for the entire web platform.
                </p>
                <h3 class="title-icon-together">
                    <span class="logo-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WebAssembly</title><path d="M14.745,0c0,0.042,0,0.085,0,0.129c0,1.52-1.232,2.752-2.752,2.752c-1.52,0-2.752-1.232-2.752-2.752 c0-0.045,0-0.087,0-0.129H0v24h24V0H14.745z M11.454,21.431l-1.169-5.783h-0.02l-1.264,5.783H7.39l-1.824-8.497h1.59l1.088,5.783 h0.02l1.311-5.783h1.487l1.177,5.854h0.02l1.242-5.854h1.561l-2.027,8.497H11.454z M20.209,21.431l-0.542-1.891h-2.861l-0.417,1.891 h-1.59l2.056-8.497h2.509l2.5,8.497H20.209z M17.812,15.028l-0.694,3.118h2.159l-0.796-3.118H17.812z"></path></svg></span>
                    <span>WebAssembly</span>
                </h3>
                <p>
                    Compile your modules to WebAssembly to supercharge your JavaScript and execute code lightning-fast directly on the web.
                    WebAssembly aims to execute at native speed by taking advantage of common hardware capabilities available on a wide range of platforms.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="default">
    <div class="container">
        <h2>Meet the Lento team!</h2>
        <p>
            Lento is being developed by a driven team that works hard to create a user environment as good as possible for all of you developers.
        </p>
        <a href="/team" class="ui yellow button">Meet the Team</a>
    </div>
</section>
<section class="get-involved red">
    <div class="container">
        <h2>Get involved</h2>
        <h3>Contribute code</h3>
            <p>
                Lento is truly a community effort, and we welcome contribution from hobbyists and production users, from
                newcomers and seasoned professionals. Come help us make the Lento experience even better!
            </p>
            <a href="https://github.com/Lento-lang/Lento" target="_blank" class="ui violet button">Read Contribution Guide</a>
    </div>
</section>

<script type="text/javascript" defer>
    $('.ui.accordion').accordion();
</script>
