<div class='lr'>
  <div>
    <section id='events-list' class='box'>
    {{#each eventsByDate}}
      {{#unless hide}}
        <article id='upcoming-{{ shortDate }}' class='event event-{{ class }}'>
          <time datetime="{{ date }}">
            <span class='day'>{{ day }}</span>
            <span class='month'>{{ month }}</span>
            <span class='year'>{{ year }}</span>
            {{#if special}}<span class='time__special'></span>{{/if}}
          </time>
          {{#each events}}
          <div class='event-detail event-detail-{{ class }}'>
            {{#if picture}}<img src="images/series/{{picture}}.png">{{/if}}
            {{#if prename}}<p class="series-ident">{{ prename }}</p>{{/if}}
            <h3>{{ name }}</h3>
            <p>
              {{#if link}}<a href='{{ link }}'>{{/if}}
              {{#if time}}{{#if venue}}{{venue}}, {{shortWeekday}} {{time}}{{else}}{{shortWeekday}} {{time}}{{/if}}{{else}}{{#if venue}}{{ venue }}{{/if}}{{/if}}
              {{#if link}}</a>{{/if}}
            </p>
          </div>
          {{/each}}
        </article>
      {{/unless}}
    {{/each}}
    </section>
  </div>

  <div>
    <div id='coming-soon' class='series-grid'></div>
  </div>
</div>
