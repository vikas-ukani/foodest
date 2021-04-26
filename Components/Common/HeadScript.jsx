import Head from 'next/head'

const HeadScript = () => {
    const tabTitle = process.env.APP_NAME || ' Foodesta'
    return (
        <Head>
            <meta charSet="UTF-8" />
            <title>{tabTitle}</title>
            <link rel="stylesheet" href="/css/normalize.css" />
            <link rel="stylesheet" href="/css/main.css" media="screen" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css' />
            <link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css' />
            <link rel="stylesheet" href="/css/bootstrap.css" />
            <link rel="stylesheet" href="/css/style-portfolio.css" />
            <link rel="stylesheet" href="/css/picto-foundry-food.css" />
            <link rel="stylesheet" href="/css/jquery-ui.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/css/font-awesome.min.css" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
    );
}
export default HeadScript;