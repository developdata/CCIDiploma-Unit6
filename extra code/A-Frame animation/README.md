#Importing animation into A-Frame
If you save a 3D model as glb or gltf, any animations you have made for it can be seen in A-Frame.

To do this you need to use the animation-mixer component on the element. animation-mixer isn't part of the A-Frame library, but is in [aframe-extras](https://github.com/n5ro/aframe-extras) a library which can be added to the head of your html.

```
<head>
    <meta charset="utf-8">
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
  </head>
```

Then you can add animation-mixer to elements on the page:
```
<a-assets>
    <a-asset-item id="box" src="untitled.glb"></a-asset-item>
</a-assets>
          
<a-gltf-model src="#box" position="0 3 -3" color="#4CC3D9" animation-mixer></a-gltf-model>


```