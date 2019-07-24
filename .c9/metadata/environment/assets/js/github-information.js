{"filter":false,"title":"github-information.js","tooltip":"/assets/js/github-information.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":["function fetchGitHubInformation(event) {","","    var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }","","    $(\"#gh-user-data\").html(","        `<div id=\"loader\">","            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />","        </div>`);","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":["function fetchGitHubInformation(event) {","","    var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }","","    $(\"#gh-user-data\").html(","        `<div id=\"loader\">","            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />","        </div>`);","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["function fetchGitHubInformation(event) {","","    var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }","","    $(\"#gh-user-data\").html(","        `<div id=\"loader\">","            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />","        </div>`);","","    $.when(","        $.getJSON(`https://api.github.com/users/${username}`)","    ).then(","        function(response) {","            var userData = response;","            $(\"#gh-user-data\").html(userInformationHTML(userData));","        },","        function(errorResponse) {","            if (errorResponse.status === 404) {","                $(\"#gh-user-data\").html(","                    `<h2>No info found for user ${username}</h2>`);","            } else {","                console.log(errorResponse);","                $(\"#gh-user-data\").html(","                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);","            }","        });","}"]}],[{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"remove","lines":["function fetchGitHubInformation(event) {","","    var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }","","    $(\"#gh-user-data\").html(","        `<div id=\"loader\">","            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />","        </div>`);","","    $.when(","        $.getJSON(`https://api.github.com/users/${username}`)","    ).then(","        function(response) {","            var userData = response;","            $(\"#gh-user-data\").html(userInformationHTML(userData));","        },","        function(errorResponse) {","            if (errorResponse.status === 404) {","                $(\"#gh-user-data\").html(","                    `<h2>No info found for user ${username}</h2>`);","            } else {","                console.log(errorResponse);","                $(\"#gh-user-data\").html(","                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);","            }","        });","}"],"id":3},{"start":{"row":0,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":["function userInformationHTML(user) {","    return `","        <h2>${user.name}","            <span class=\"small-name\">","                (@<a href=\"${user.html_url}\" target=\"_blank\">${user.login}</a>)","            </span>","        </h2>","        <div class=\"gh-content\">","            <div class=\"gh-avatar\">","                <a href=\"${user.html_url}\" target=\"_blank\">","                    <img src=\"${user.avatar_url}\" width=\"80\" height=\"80\" alt=\"${user.login}\" />","                </a>","            </div>","            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>","        </div>`;","}","","function fetchGitHubInformation(event) {","","    var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }","","    $(\"#gh-user-data\").html(","        `<div id=\"loader\">","            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />","        </div>`);","","    $.when(","        $.getJSON(`https://api.github.com/users/${username}`)","    ).then(","        function(response) {","            var userData = response;","            $(\"#gh-user-data\").html(userInformationHTML(userData));","        },","        function(errorResponse) {","            if (errorResponse.status === 404) {","                $(\"#gh-user-data\").html(","                    `<h2>No info found for user ${username}</h2>`);","            } else {","                console.log(errorResponse);","                $(\"#gh-user-data\").html(","                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);","            }","        });","}"]}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":252.1953125,"selection":{"start":{"row":47,"column":1},"end":{"row":47,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":["string.quasi.start","no_regex"],"mode":"ace/mode/javascript"}},"timestamp":1563989527529,"hash":"33e6c629801742a2d35537b2a1559b4be69a28b5"}