const listRepos = async (username) => {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    const markup = repos
        .map(
            (r) => `<li>
                        <a href="${r.html_url}">${r.full_name}</a>
                        (${r.stargazers_count})
                    </li>`
        )
        .join('');

    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = `<ul>${markup}</ul>`;
};

const watchInput = () => {
    const inputEl = document.querySelector('#username')
    inputEl.addEventListener('change', ev => {
        listRepos(ev.target.value);
    })
}

listRepos('jlengstorf');
watchInput();
