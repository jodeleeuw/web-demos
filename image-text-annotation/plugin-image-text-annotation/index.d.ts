import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "sketchpad";
    readonly parameters: {
        readonly image: {
            readonly type: ParameterType.IMAGE;
            readonly default: any;
        };
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly default: any;
        };
    };
};
declare type Info = typeof info;
/**
 * **image-text-annotaiton**
 *
 * jsPsych plugin for annotating an image with text labels
 *
 * @author Josh de Leeuw
 * @see {@link https://www.jspsych.org/latest/plugins/image-text-annotation/ image-text-annotation plugin documentation on jspsych.org}
 */
declare class ImageTextAnnotationPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "sketchpad";
        readonly parameters: {
            readonly image: {
                readonly type: ParameterType.IMAGE;
                readonly default: any;
            };
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly default: any;
            };
        };
    };
    private img_container;
    private is_drawing;
    private active_box;
    private active_label;
    private boxes;
    private display_element;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    private renderDisplay;
    private addEvents;
    private add_css;
    private start_box;
    private move_box;
    private stop_box;
    private sort_boxes;
    select_label(label: string): void;
    private handle_radio_change;
    private deselect_all;
    private add_new_label;
    private update_labels;
}
export default ImageTextAnnotationPlugin;
