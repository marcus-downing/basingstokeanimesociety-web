<div class="one">

<div>

<div class="box box--button">
  <h2>Community</h2>
  <p>You can find more information about our events on our Discord server.</p>
  <a class='btn btn-discord' href='https://discord.gg/sypjyaA' target="_blank"><i></i><span>Discord</span></a>
</div>

<div id="news-area"></div>

{{#each news}}
<article class='news box'>
<time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span><span class='year'>{{ year }}</span></time>
<h3>{{title}}</h3>
{{#each body}}
<p>{{this}}</p>
{{/each}}
{{#if discordLink}}
<p><a class='btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join the Discord</span></a></p>
{{/if}}
</article>
{{/each}}

</div>
</div>
