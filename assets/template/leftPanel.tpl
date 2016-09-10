<ul class="am-list admin-sidebar-list" id="collapase-nav-1">
    {{each items as item i}}
    <li class="am-panel">
        <a data-am-collapse="{parent: '#collapase-nav-1'{{if item.target}}, target: '#{{item.target}}'{{/if}}}" class="item_click" data-index="{{item.href}}" href="#{{item.href}}">
            <i class="{{item.icon}} am-margin-left-sm"></i> {{item.title}}
            {{if item.child}}
            <i class="am-icon-angle-right am-fr am-margin-right"></i>
            {{/if}}
        </a>
        {{if item.child}}
        <ul class="am-list am-collapse admin-sidebar-sub" id="{{item.target}}">
            {{each item.child as child}}
            <li><a class="item_click" data-index="{{item.href}}.{{child.href}}" href="#{{child.href}}"><i class="{{child.icon}} am-margin-left-sm"></i> {{child.title}} </a></li>
            {{/each}}
        </ul>
        {{/if}}
    </li>
    {{/each}}
</ul>



