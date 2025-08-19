// CesiumViewer.tsx
import React, { useEffect, useRef, useState } from "react";

const TERRAIN_URL = "/cesium/terrain";
const TILESET_URL = "/cesium/tiles/tileset.json";

const CesiumViewer: React.FC = () => {
  const cesiumRef = useRef<HTMLDivElement | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    if (!cesiumRef.current || viewerRef.current) return;

    let canceled = false;

    const initCesium = async () => {
      const Cesium = await import("cesium");
      await import("cesium/Build/Cesium/Widgets/widgets.css");
      if (canceled) return;

      setLoadingProgress(10);

      // Terrain
      const terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(TERRAIN_URL, {
        requestVertexNormals: true,
      });
      setLoadingProgress(30);

      // Minimal viewer (no timeline, no animation, no baseLayerPicker, etc.)
      const viewer = new Cesium.Viewer(cesiumRef.current!, {
        useDefaultRenderLoop: true,
        terrainProvider,
        scene3DOnly: true,
        shadows: true,
        timeline: false,
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        selectionIndicator: false,
        contextOptions: {
          webgl: {
            preserveDrawingBuffer: true,
            failIfMajorPerformanceCaveat: true,
          },
        },
      });
      viewerRef.current = viewer;

      // Imagery
      viewer.imageryLayers.removeAll();
      const imageryProvider = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
      );
      viewer.imageryLayers.addImageryProvider(imageryProvider);
      setLoadingProgress(50);

      viewer.scene.globe.enableLighting = true;
      viewer.scene.globe.depthTestAgainstTerrain = true;

      // 3D Tiles
      try {
        const tileset = await Cesium.Cesium3DTileset.fromUrl(TILESET_URL);
        viewer.scene.primitives.add(tileset);
        setLoadingProgress(80);
        const heading = 180 * Math.PI / 90;
        const pitch = -0.2;
        const range = 500;
        await viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(heading, pitch, range));
      } catch (e) {
        console.error("Failed to load tileset:", e);
      }

      setLoadingProgress(100);
      setIsLoaded(true);
    };

    initCesium();

    return () => {
      canceled = true;
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <div
            style={{
              height: "10px",
              width: "100%",
              backgroundColor: "#ddd",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${loadingProgress}%`,
                backgroundColor: "#4caf50",
                transition: "width 0.3s",
              }}
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "8px" }}>
            Loading Cesium: {loadingProgress}%
          </p>
        </div>
      )}
      <div
        ref={cesiumRef}
        style={{ width: "100%", height: "100%", visibility: isLoaded ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default CesiumViewer;
