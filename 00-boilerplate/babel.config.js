
export default function (api){
  api.cache(true);
  "presets"=[
    ["@babel/preset-env", {"targets": {"node": "current"}}],
    "@babel/preset-typescript",
    "@babel/preset-react",
    
    // "@babel/preset-flow"
  ];
  "plugins"=["@emotion","@plugin-syntax-flow","@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"];

return {
  presets,
  plugins
}
}
