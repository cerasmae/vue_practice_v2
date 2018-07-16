window.Event = new Vue();

Vue.component('book-item', {
	data() {
		return {
			title: 'Run Away With Me',
			description: '“I didn’t even know we were making a music video until about halfway through it. David always has a camera in his hand and he has a way about him that makes you forget that it’s there. It became a part of our daily adventure on the road to film as we went. Promo tour can be a blur and I can remember watching over his shoulder as he uploaded the footage, recounting memories of the trip that I had almost already forgotten. This project became a way for us to slow down time and preserve the moments from magical places like Paris, New York, and Japan.”',
			cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/df/73/06/df73067e-a48a-c615-fe63-dde6dbcbd87d/UMG_cvrart_00602547455109_01_RGB72_1500x1500_15UMGIM31529.jpg/1200x630bb.jpg'
		}
	},
	template: `
		<div class="column is-one-third">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="cover" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 no-padding">Okinami</p>
                            <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
                            <p class="subtitle is-6">{{ title }}</p>
                        </div>
                    </div>
                    <div class="content" >
                        {{ description }}
                        <div class="background-icon"><span class="icon-twitter"></span></div>
                    </div>
                </div>
            </div>
        </div>
	`
});

Vue.component('book-feed', {
	// props: {

	// },
	template: `
		<div class="row columns is-multiline">
			<book-item></book-item>
			<book-item></book-item>
			<book-item></book-item>
			<book-item></book-item>
			<book-item></book-item>
			<book-item></book-item>
			<book-item></book-item>
		</div>
	`
});

var BookApp = new Vue({
	el: '#book_app',
});