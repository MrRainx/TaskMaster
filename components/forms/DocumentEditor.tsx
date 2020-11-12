import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import * as React from 'react';
//import './default.component.css';
import { SampleBase } from './sample-base';
import { TitleBar } from './title-bar';
DocumentEditorContainerComponent.Inject(Toolbar);

// tslint:disable:max-line-length
class Default extends SampleBase {
  private hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
  public container: DocumentEditorContainerComponent;
  public titleBar;
  public rendereComplete(): void {
    this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
    this.container.documentEditor.pageOutline = '#E0E0E0';
    this.container.documentEditor.acceptTab = true;
    this.container.documentEditor.resize();
    this.titleBar = new TitleBar(
      document.getElementById('documenteditor_titlebar'),
      this.container.documentEditor,
      true,
    );
    this.onLoadDefault();
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div id="documenteditor_titlebar" className="e-de-ctn-title"></div>
          <div id="documenteditor_container_body">
            <DocumentEditorContainerComponent
              id="container"
              ref={(scope) => {
                this.container = scope;
              }}
              style={{ display: 'block' }}
              height={'590px'}
              enableToolbar={true}
              locale="es-ES"
            />
          </div>
        </div>
        <script>
          {
            (window.onbeforeunload = function () {
              return 'Want to save your changes?';
            })
          }
        </script>
      </div>
    );
  }
  onLoadDefault = (): void => {
    // tslint:disable
    const defaultDocument: object = {
      sections: [
        {
          sectionFormat: {
            pageWidth: 612,
            pageHeight: 792,
            leftMargin: 72,
            rightMargin: 72,
            topMargin: 72,
            bottomMargin: 72,
            differentFirstPage: false,
            differentOddAndEvenPages: false,
            headerDistance: 36,
            footerDistance: 36,
          },
          blocks: [
            {
              paragraphFormat: {
                afterSpacing: 30,
                styleName: 'Heading 1',
                listFormat: {},
              },
              characterFormat: {},
              inlines: [],
            },
          ],
          headersFooters: {
            header: {
              blocks: [
                {
                  paragraphFormat: { listFormat: {} },
                  characterFormat: {},
                  inlines: [],
                },
              ],
            },
            footer: {
              blocks: [
                {
                  paragraphFormat: { listFormat: {} },
                  characterFormat: {},
                  inlines: [],
                },
              ],
            },
          },
        },
      ],
      characterFormat: { fontSize: 11, fontFamily: 'Calibri' },
      paragraphFormat: {
        lineSpacing: 1.0791666507720947,
        lineSpacingType: 'Multiple',
        listFormat: {},
      },
      styles: [
        {
          name: 'Normal',
          type: 'Paragraph',
          paragraphFormat: {
            lineSpacing: 1.149999976158142,
            lineSpacingType: 'Multiple',
            listFormat: {},
          },
          characterFormat: { fontFamily: 'Calibri' },
          next: 'Normal',
        },
        {
          name: 'Default Paragraph Font',
          type: 'Character',
          characterFormat: {},
        },
        {
          name: 'Heading 1 Char',
          type: 'Character',
          characterFormat: {
            fontSize: 16,
            fontFamily: 'Calibri Light',
            fontColor: '#2F5496',
          },
          basedOn: 'Default Paragraph Font',
        },
        {
          name: 'Heading 1',
          type: 'Paragraph',
          paragraphFormat: {
            beforeSpacing: 12,
            afterSpacing: 0,
            outlineLevel: 'Level1',
            listFormat: {},
          },
          characterFormat: {
            fontSize: 16,
            fontFamily: 'Calibri Light',
            fontColor: '#2F5496',
          },
          basedOn: 'Normal',
          link: 'Heading 1 Char',
          next: 'Normal',
        },
        {
          name: 'Heading 2 Char',
          type: 'Character',
          characterFormat: {
            fontSize: 13,
            fontFamily: 'Calibri Light',
            fontColor: '#2F5496',
          },
          basedOn: 'Default Paragraph Font',
        },
        {
          name: 'Heading 2',
          type: 'Paragraph',
          paragraphFormat: {
            beforeSpacing: 2,
            afterSpacing: 6,
            outlineLevel: 'Level2',
            listFormat: {},
          },
          characterFormat: {
            fontSize: 13,
            fontFamily: 'Calibri Light',
            fontColor: '#2F5496',
          },
          basedOn: 'Normal',
          link: 'Heading 2 Char',
          next: 'Normal',
        },
      ],
      lists: [],
      abstractLists: [],
    };
    // tslint:enable
    this.container.documentEditor.open(JSON.stringify(defaultDocument));
    this.container.documentEditor.documentName = 'Getting Started';
    this.titleBar.updateDocumentTitle();
    this.container.documentChange = (): void => {
      this.titleBar.updateDocumentTitle();

      this.container.documentEditor.focusIn();
    };
  };
}

export default Default;
