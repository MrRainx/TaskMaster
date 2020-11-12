import { Browser, createElement } from '@syncfusion/ej2-base';
import {
  Count,
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Table,
  Toolbar,
  ToolbarSettingsModel,
} from '@syncfusion/ej2-react-richtexteditor';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript';
import React from 'react';

class CustomEditor extends React.Component<any> {
  private rteObj: RichTextEditorComponent | any;

  // Rich Text Editor items list
  private items: string[] = [
    'Bold',
    'Italic',
    'Underline',
    'StrikeThrough',
    'FontName',
    'FontSize',
    'FontColor',
    'BackgroundColor',
    'LowerCase',
    'UpperCase',
    '|',
    'Formats',
    'Alignments',
    'OrderedList',
    'UnorderedList',
    'Outdent',
    'Indent',
    'SuperScript',
    'SubScript',
    '|',
    'CreateTable',
    'CreateLink',
    'Image',
    '|',
    'ClearFormat',
    'Print',
    'SourceCode',
    'FullScreen',
    '|',
    'Undo',
    'Redo',
  ];

  //Rich Text Editor ToolbarSettings
  private toolbarSettings: ToolbarSettingsModel = {
    items: this.items,
  };

  private textArea: HTMLTextAreaElement;
  private myCodeMirror;

  public mirrorConversion(e?: any): void {
    this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
    const id: string = (this.rteObj as any).getID() + 'mirror-view';
    let mirrorView: HTMLElement = this.rteObj?.element.querySelector('#' + id) as HTMLElement;
    const charCount: HTMLElement = this.rteObj?.element.querySelector(
      '.e-rte-character-count',
    ) as HTMLElement;
    if (e.targetItem === 'Preview') {
      this.textArea.style.display = 'block';
      mirrorView.style.display = 'none';
      this.textArea.innerHTML = this.myCodeMirror.getValue();
      charCount.style.display = 'block';
    } else {
      if (!mirrorView) {
        mirrorView = createElement('div', { className: 'e-content' });
        mirrorView.id = id;
        this.textArea.parentNode.appendChild(mirrorView);
      } else {
        mirrorView.innerHTML = '';
      }
      this.textArea.style.display = 'none';
      mirrorView.style.display = 'block';
      this.renderCodeMirror(mirrorView, (this.rteObj as any).value);
      charCount.style.display = 'none';
    }
  }

  public renderCodeMirror(mirrorView: HTMLElement, content: string): void {
    this.myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: 'text/html',
      lineWrapping: true,
    });
  }

  public handleFullScreen(e: any): void {
    //const sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
    //const sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
    //let leftBar: HTMLElement;
    //let transformElement: HTMLElement;
    if (Browser.isDevice) {
      //leftBar = document.querySelector('#right-sidebar');
      //transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
    } else {
      //leftBar = document.querySelector('#left-sidebar');
      //transformElement = document.querySelector('#right-pane');
    }
    if (e.targetItem === 'Maximize') {
      /*if (Browser.isDevice && Browser.isIos) {
        addClass([sbCntEle, sbHdrEle], ['hide-header']);
      }
      addClass([leftBar], ['e-close']);
      removeClass([leftBar], ['e-open']);
      if (!Browser.isDevice) {
        transformElement.style.marginLeft = '0px';
      }
      transformElement.style.transform = 'inherit';
      */
    } else if (e.targetItem === 'Minimize') {
      /*if (Browser.isDevice && Browser.isIos) {
        removeClass([sbCntEle, sbHdrEle], ['hide-header']);
      }
      removeClass([leftBar], ['e-close']);
      if (!Browser.isDevice) {
        addClass([leftBar], ['e-open']);
        transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
      }
      transformElement.style.transform = 'translateX(0px)';
      */
    }
  }

  public actionCompleteHandler(e: any): void {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
      (this.rteObj.sourceCodeModule.getPanel() as HTMLTextAreaElement).style.display = 'none';
      this.mirrorConversion(e);
    } else {
      setTimeout(() => {
        (this.rteObj as any).toolbarModule.refreshToolbarOverflow();
      }, 400);
    }
  }

  render() {
    return (
      <div className="form-group">
        <RichTextEditorComponent
          ref={(richtexteditor) => (this.rteObj = richtexteditor)}
          change={(event) => this.props.onChange && this?.props?.onChange(event?.value)}
          showCharCount={true}
          actionBegin={this.handleFullScreen.bind(this)}
          actionComplete={this.actionCompleteHandler.bind(this)}
          maxLength={2000}
          height={500}
          toolbarSettings={this.toolbarSettings}
          value={this?.props?.value}
          enableResize
        >
          <Inject services={[Toolbar, Image, Link, HtmlEditor, Count, QuickToolbar, Table]} />
        </RichTextEditorComponent>
      </div>
    );
  }
}
export default CustomEditor;
