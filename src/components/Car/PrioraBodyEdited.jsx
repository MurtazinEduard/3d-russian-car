import React, { useRef, useMemo } from "react";
import { useGLTF, useEnvironment, Text } from "@react-three/drei";
import * as THREE from "three";
import { useSelector } from "react-redux";
function PrioraBodyEdited(props) {
  const { nodes, materials } = useGLTF("/3d-russian-car/assets/PrioraBody.gltf");
  const BodyColor = useSelector((state) => state.control.color);
  const BodyHeight = useSelector((state) => state.control.suspension);
  const PlateNumbers = useSelector((state) => state.control.plateNumbers)
  const colorMemo = useMemo(
    () => new THREE.Color(BodyColor).convertSRGBToLinear(),
    [BodyColor]
  );

  const envMap = useEnvironment({ files: "/3d-russian-car/assets/envMap/belfast.hdr" });

  materials.priora_body__pri1.color = colorMemo;
  materials.priora_body__pri1.metalness = 0.8;
  materials.priora_body__pri1.roughness = 0.01;
  materials.priora_body__pri1.envMap = envMap;
  materials.priora_body__pri1.envMapIntensity = 0.15;
  materials.PRIORA_STEKLA__e1.color = new THREE.Color("#101010").convertSRGBToLinear();
  materials.PRIORA_STEKLA__e1.metalness = 0.5;
  materials.PRIORA_STEKLA__e1.roughness = 0.01;
  materials.PRIORA_STEKLA__e1.envMap = envMap;
  materials.PRIORA_STEKLA__e1.envMapIntensity = 0.15;

  return (
    <group
      {...props}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, BodyHeight, 0]}
    >
      {/* Сам кузов */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_11.geometry}
        material={materials.priora_body__pri1}
      />
      {/* Стекла */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_2.geometry}
        material={materials.PRIORA_STEKLA__e1}
      />
      {/* Решетки все, ручки дверей, брызговики и тд */}
      <mesh
        geometry={nodes.Mesh14_default1_skpE862_1_Group1_Model.geometry}
        material={materials.Matte__FF050505_1}
      />
      {/* Задние фары поворотники */}
      <mesh geometry={nodes.rearlights2.geometry} material={materials.vehiclelights4} />
      {/* Глушитель */}
      <mesh
        geometry={nodes.Mesh279_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.PRIORA_GLUSH__sp1}
      />
      {/* Пружины амортов перед и зад */}
      <mesh
        geometry={nodes.Mesh279_default1_skpE862_1_Group1_Model_3.geometry}
        material={materials.PRIORA_RED_DIRT_1}
      />
      {/* Амортизаторы задние можно удалить крч*/}
      <mesh
        geometry={nodes.Mesh279_default1_skpE862_1_Group1_Model_4.geometry}
        material={materials.PRIORA_BLACK_DIR1}
      />
      {/* Эмблема приора на решетке спереди */}
      <mesh
        geometry={nodes.Mesh279_default1_skpE862_1_Group1_Model_5.geometry}
        material={materials.Matte__FF656872_1}
      />
      {/* Зеркала */}
      <mesh
        geometry={nodes.Mesh430_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.Matte__FF797B8D_1}
      />
      {/* Стекло в зеркалах */}
      <mesh
        geometry={nodes.Mesh430_default1_skpE862_1_Group1_Model_2.geometry}
        material={materials.priora_body__sec1}
      />
      {/* Днище, удалить если не нужно будет */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.PRIORA_DIRT__spe1}
      />

      {/* Пороги */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_3.geometry}
        material={materials.priora_body__sec1}
      />
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_10.geometry}
        material={materials.Matte__FF656872_1}
      />

      {/* Оконтовка зеркал вся */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_12.geometry}
        material={materials.Matte__FF050505_1}
      />
      {/* Оптика основная часть темнокрасная */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_15.geometry}
        material={materials.PRIORA_OPTIK_REA1}
      />
      {/* Поворотники боковые */}
      <mesh
        geometry={nodes.Mesh33_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.PRIORA_OPTIK_REA1}
      />
      <mesh
        geometry={nodes.Mesh33_default1_skpE862_1_Group1_Model_2.geometry}
        material={materials.Matte__FF050505_1}
      />
      {/* Дворники */}
      <mesh
        geometry={nodes.Mesh226_default1_skpE862_1_Group1_Model_5.geometry}
        material={materials.Matte__FF050505_1}
      />
      {/* Фары задние */}
      <mesh
        geometry={nodes.Mesh570_default1_skpE862_1_Group1_Model.geometry}
        material={materials.vehiclelights3}
      />
      <mesh
        geometry={nodes.Mesh570_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.vehiclelights1}
      />
      {/* Номерные таблички */}
      <mesh
        geometry={nodes.Mesh23_default1_skpE862_1_Group1_Model_1.geometry}
        material={materials.priora_misc__spe1}
      />
      <Text
        scale={0.1}
        color={"black"}
        position={[-0.9, -2.57, -0.4]}
        rotation={[Math.PI / 2, Math.PI / 0.5, Math.PI / 1]}
        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      >
        {PlateNumbers}
      </Text>
      <mesh
        geometry={nodes.Mesh23_default1_skpE862_1_Group1_Model_2.geometry}
        material={materials.Matte__FF050505_1}
      />
    </group>
  );
}

useGLTF.preload("/3d-russian-car/assets/PrioraBody.gltf");

export default PrioraBodyEdited;
