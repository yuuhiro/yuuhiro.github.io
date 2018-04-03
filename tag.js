<my-tag>
    <ul>
        <li each={ posts }>{ title }</li>
    </ul>

    <script>
        this.posts = [{title: 'hogehoge'}];
        var that = this;
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res.json();
        })
        .then((res) => {
            this.posts = res.slice(1,5);
            {/* console.log(res.slice(1,5)); */}
            this.update();
            console.log(res);
        });
    </script>
</my-tag>