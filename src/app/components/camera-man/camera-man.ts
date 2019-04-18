import { ArcRotateCamera, Vector3 } from 'babylonjs';
import { inject, injectable } from 'inversify';

import Canvas from '../_core/canvas/canvas';
import Scene from '../_core/scene/scene';

@injectable()
export default class CameraMan {

  public camera!: ArcRotateCamera;
  private scene: Scene;
  private canvas: Canvas;

  constructor(
    @inject(Scene) scene: Scene,
    @inject(Canvas) canvas: Canvas,
  ) {
    this.scene = scene;
    this.canvas = canvas;
  }

  public generate(): void {
    this.camera = new ArcRotateCamera('camera', 0, 0, 10, Vector3.Zero(), this.scene.instance);
    this.camera.attachControl(this.canvas.element);
    this.camera.setTarget(new Vector3(0, 0, 0));
    this.camera.setPosition(new Vector3(5, 5, 60));
  }

}
