const yep = [
	{
        "check": "should be in the middle",
		"created_at": "2022-02-16T11:16:04Z",
		"published_at": "2022-01-16T11:17:07Z"
	},
	{
        "check": "should be first",
		"created_at": "2022-02-16T08:55:24Z",
		"published_at": "2022-01-17T08:55:44Z"
	},
	{
        "check": "should be last",
		"created_at": "2022-02-14T11:43:00Z",
		"published_at": "2021-02-14T11:45:24Z"
	}
]

console.log('This is a change too yes - indeeed')

/*
yep.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
console.log(yep)
console.log("main")

84e9f633901a024376199978836df417f62e93f7

5bdf433579cdf76fdd2bac03a245627936c27be1

['rev-list', `--pretty=format:${format}`, '--header', rev || 'HEAD'])

git log --pretty=format:"%h%x09%an%x09%ad%x09%s%x09%b"

git rev-list --pretty=format:"%h%x09%an%x09%ad%x09%s%x09%b" 228bf50..HEAD
*/