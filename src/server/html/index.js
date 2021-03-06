export default ({NAME}) =>
`<!doctype html>
<html>
<head>
	<title>${NAME}</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="HandheldFriendly" content="True"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="white-translucent"/>
	<meta name="viewport" content="initial-scale=1.0,width=device-width,user-scalable=0,user-scalable=no"/>

	<script>window._DEFAULTS=${JSON.stringify ({NAME})}</script>
</head>
	<body>
		<div id="root"></div>
		<script src="/bundle.js"></script>
	</body>
</html>`;