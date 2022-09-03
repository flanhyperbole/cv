README

- config is done and recommended to be done via `direnv` and `.envrc` file https://direnv.net/

- setting up a live reload instance:
    - use the vscode live reload server https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - check the setting `use web extension`
    - browser extension git: https://github.com/ritwickdey/live-server-web-extension
    - download the browser extension: https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/ 
    - set your `actual server address` to 5000, the liveserver address to 5500. 
    - start in vscode, changes in templates even rendered with `render_templates` show on save 


- starting the tailwind watcher
    - npx tailwindcss -i ./static/base.css -o ./static/output.css --watch
    -- currently note I'm using the static directory rather than the dist dir as per documents as it can be easily accessed byt the url_for from flask. Will change if this becomes an issue, I'm guessing at the build stage