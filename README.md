README

- config is done and recommended to be done via `direnv` and `.envrc` file https://direnv.net/

- setting up a live reload instance:
    - use the vscode live reload server https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - check the setting `use web extension`
    - browser extension git: https://github.com/ritwickdey/live-server-web-extension
    - download the browser extension: https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/ 
    - set your `actual server address` to 5000, the liveserver address to 5500. 
    - start in vscode, changes in templates even rendered with `render_templates` show on save 
    - NOTE: you have to go to the address in the server extension exactly : 127.0.0.1 != localhost
