Vue.component('table-head', {
    props: ['head', 'view_id', 'dialogue'],
    template: `<span v-if="view_id"><a v-bind:href="'issue.html?view=' + view_id + '&dialogue=' + dialogue">{{ head }}</a></span>
    <span v-else class="align-top font-weight-normal border-0" width="10%">{{ head }}</span>`
})

Vue.component('author-details', {
    props: ['name', 'type', 'content'],
    template: `<div class="my-2">
    <div>
        <span class="font-weight-normal my-1">{{ name }}</span>
        <br>
    <span class="font-weight-light small">{{ content }}</span>:&nbsp;<span class="font-weight-light small"><a v-if="type=='Column'" v-bind:href="'https://airtable.com/shrTR908BwRWJ2Zap?prefill_Status=Pending&prefill_Type=Column&prefill_Title%20of%20text=' + encodeURIComponent(content) + '&prefill_Contact%20Author=' + encodeURIComponent(name)">submission form</a><a v-else-if="type=='Forum'" v-bind:href="'https://airtable.com/shry0gQP1LpJrIth3?prefill_Status=Pending&prefill_Type=Forum&prefill_Title%20of%20text=' + encodeURIComponent(content) + '%3A%20&prefill_Sub%20Editor=' + encodeURIComponent(name)">submission form</a><a v-else href="https://airtable.com/shr0sfqAldfNfkIs7?prefill_Status=Pending">general form</a></span>
    </div>`
})

Vue.component('author-deadlines', {
    props: ['months', 'content', 'deadline'],
    template: `<a data-toggle="popover" v-on:mouseover="popOver" data-placement="top" data-trigger="hover" title="{{ months }} + ' Issue'" data-content="{{content}} + ' due ' + {{deadline}}">
    <span class="oi oi-check" aria-hidden="true"></span>
</a>`
})