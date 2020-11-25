'use strict'

const { colors } = require('@primer/primitives')
const opacity = require('hex-color-opacity')

function theme ({ name, style }) {
  const pick = (options) => options[style]

  const workbenchForeground = pick({ light: colors.gray[8] })
  const editorForeground = pick({ light: colors.gray[9] })

  const background = pick({ light: colors.white })

  return {
    name: name,
    type: style,
    colors: {
      focusBorder: pick({ light: colors.white }),
      foreground: pick({ light: colors.gray[7] }),
      descriptionForeground: colors.gray[5],
      errorForeground: colors.red[6],
      'icon.foreground': colors.blue[6],

      'textBlockQuote.background': background,
      'textBlockQuote.border': colors.gray[2],
      'textCodeBlock.background': colors.gray[1],
      'textLink.activeForeground': pick({ light: colors.blue[5] }),
      'textLink.foreground': pick({ light: colors.blue[5] }),
      'textPreformat.foreground': colors.gray[5],
      'textSeparator.foreground': colors.gray[1],

      'button.background': pick({ light: colors.green[5] }),
      'button.foreground': pick({ light: colors.white }),
      'button.hoverBackground': pick({ light: colors.green[6] }),
      'button.secondaryBackground': pick({ light: colors.blue[5] }),
      'button.secondaryForeground': pick({ light: colors.white }),
      'button.secondaryHoverBackground': pick({ light: colors.blue[6] }),
      'checkbox.background': pick({ light: colors.gray[2] }),
      'checkbox.border': pick({ light: colors.gray[3] }),

      'dropdown.background': pick({ light: colors.gray[2] }),
      'dropdown.listBackground': background,
      'dropdown.border': pick({ light: colors.gray[3] }),
      'dropdown.foreground': workbenchForeground,

      'input.background': pick({ light: colors.gray[2] }),
      'input.border': pick({ light: colors.gray[3] }),
      'input.foreground': workbenchForeground,
      'input.placeholderForeground': pick({ light: colors.gray[4] }),
      'inputOption.activeBackground': pick({ light: colors.blue[2] }),
      'inputOption.activeForeground': workbenchForeground,
      'inputValidation.errorBackground': pick({ light: colors.red[2] }),
      'inputValidation.errorBorder': pick({ light: colors.red[2] }),
      'inputValidation.infoBackground': pick({ light: colors.blue[2] }),
      'inputValidation.infoBorder': pick({ light: colors.blue[2] }),
      'inputValidation.warningBackground': pick({ light: colors.yellow[2] }),
      'inputValidation.warningBorder': pick({ light: colors.yellow[2] }),

      'scrollbar.shadow': pick({ light: colors.white }),
      'scrollbarSlider.background': opacity(pick({ light: colors.gray[4] }), 0.4),
      'scrollbarSlider.hoverBackground': opacity(pick({ light: colors.gray[4] }), 0.3),
      'scrollbarSlider.activeBackground': opacity(pick({ light: colors.gray[4] }), 0.3),

      'badge.foreground': pick({ light: colors.white }),
      'badge.background': pick({ light: colors.blue[5] }),

      'progressBar.background': colors.blue[5],

      'list.activeSelectionBackground': background,
      'list.activeSelectionForeground': pick({ light: colors.blue[5] }),
      'list.inactiveSelectionBackground': background,
      'list.inactiveSelectionForeground': pick({ light: colors.blue[5] }),
      'list.dropBackground': opacity(pick({ light: colors.blue[5] }), 0.2),
      'list.focusBackground': pick({ light: colors.blue[1] }),
      'list.focusForeground': workbenchForeground,
      'list.highlightForeground': workbenchForeground,
      'list.hoverBackground': background,
      'list.hoverForeground': editorForeground,
      'list.inactiveFocusBackground': background,
      'list.invalidItemForeground': pick({ light: colors.red[5] }),
      'list.errorForeground': pick({ light: colors.red[5] }),
      'list.warningForeground': pick({ light: colors.yellow[5] }),
      'listFilterWidget.background': pick({ light: colors.yellow[5] }),
      'listFilterWidget.noMatchesOutline': pick({ light: colors.yellow[5] }),
      'list.filterMatchBackground': pick({ light: colors.yellow[5] }),
      'list.filterMatchBorder': pick({ light: colors.yellow[5] }),
      'list.deemphasizedForeground': pick({ light: colors.gray[4] }),

      'tree.indentGuidesStroke': pick({ light: colors.gray[3] }),

      'activityBar.background': background,
      'activityBar.foreground': workbenchForeground,
      'activityBar.dropBorder': workbenchForeground,
      'activityBar.inactiveForeground': colors.gray[4],
      'activityBarBadge.background': pick({ light: colors.blue[5] }),
      'activityBarBadge.foreground': pick({ light: colors.white }),
      'activityBar.activeBorder': pick({ light: colors.blue[5] }),

      'sideBar.foreground': pick({ light: colors.gray[5] }),
      'sideBar.background': background,
      'sideBar.dropBackground': opacity(pick({ light: colors.blue[5] }), 0.2),
      'sideBarTitle.foreground': workbenchForeground,
      'sideBarSectionHeader.foreground': workbenchForeground,
      'sideBarSectionHeader.background': background,

      'minimap.findMatchHighlight': colors.yellow[5],
      'minimap.selectionHighlight': colors.blue[5],
      'minimap.errorHighlight': pick({ light: colors.red[5] }),
      'minimap.warningHighlight': pick({ light: colors.yellow[5] }),
      'minimap.background': background,
      'minimapSlider.background': opacity(pick({ light: colors.gray[4] }), 0.4),
      'minimapSlider.hoverBackground': opacity(pick({ light: colors.gray[4] }), 0.4),
      'minimapSlider.activeBackground': opacity(pick({ light: colors.gray[4] }), 0.4),
      'minimapGutter.addedBackground': pick({ light: colors.green[5] }),
      'minimapGutter.modifiedBackground': pick({ light: colors.blue[5] }),
      'minimapGutter.deletedBackground': colors.red[5],

      'editorGroup.border': pick({ light: colors.gray[2] }),
      'editorGroup.dropBackground': opacity(pick({ light: colors.blue[5] }), 0.2),
      'editorGroupHeader.noTabsBackground': background,
      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': background,
      'editorGroupHeader.border': background,

      'tab.activeForeground': workbenchForeground,
      'tab.activeBackground': background,
      'tab.inactiveForeground': pick({ light: colors.gray[4] }),
      'tab.border': background,
      'tab.activeBorder': pick({ light: colors.blue[5] }),
      'tab.inactiveBackground': background,
      'tab.hoverForeground': workbenchForeground,
      'tab.unfocusedHoverForeground': workbenchForeground,

      'editor.foreground': editorForeground,
      'editor.background': background,
      'editorCursor.foreground': pick({ light: colors.blue[5] }),
      'editorLineNumber.foreground': pick({ light: colors.gray[3] }),
      'editorLineNumber.activeForeground': editorForeground,
      'editorIndentGuide.background': pick({ light: colors.gray[2] }),
      'editorIndentGuide.activeBackground': pick({ light: colors.gray[3] }),
      'editorCodeLens.foreground': pick({ light: colors.gray[4] }),
      'editor.lineHighlightBackground': pick({ light: colors.gray[1] }),
      'editor.selectionBackground': opacity(pick({ light: colors.blue[5] }), 0.3),
      'editor.selectionHighlightBackground': opacity(pick({ light: colors.blue[5] }), 0.2),
      'editor.inactiveSelectionBackground': opacity(pick({ light: colors.blue[5] }), 0.2),
      'editor.findMatchBackground': opacity(pick({ light: colors.yellow[5] }), 0.5),
      'editor.findMatchHighlightBackground': opacity(pick({ light: colors.yellow[5] }), 0.5),
      'editor.findRangeHighlightBackground': opacity(pick({ light: colors.gray[5] }), 0.2),
      'editor.hoverHighlightBackground': opacity(pick({ light: colors.blue[5] }), 0.5),
      'editorLink.activeForeground': pick({ light: colors.blue[5] }),
      'editorWhitespace.foreground': pick({ light: colors.gray[3] }),
      'editorBracketMatch.background': opacity(pick({ light: colors.blue[5] }), 0.1),
      'editorBracketMatch.border': opacity(pick({ light: colors.blue[5] }), 0.1),
      'editor.foldBackground': pick({ light: colors.gray[0] }),

      'editorLightBulb.foreground': pick({ light: colors.yellow[5] }),
      'editorLightBulbAutoFix.foreground': pick({ light: colors.yellow[5] }),

      'editorOverviewRuler.background': background,
      'editorOverviewRuler.border': background,
      'editorOverviewRuler.findMatchForeground': background,
      'editorOverviewRuler.modifiedForeground': pick({ light: colors.blue[5] }),
      'editorOverviewRuler.addedForeground': pick({ light: colors.green[5] }),
      'editorOverviewRuler.deletedForeground': pick({ light: colors.red[5] }),
      'editorOverviewRuler.warningForeground': pick({ light: colors.yellow[5] }),
      'editorOverviewRuler.infoForeground': pick({ light: colors.blue[5] }),

      'editorError.foreground': pick({ light: colors.red[5] }),
      'editorWarning.foreground': pick({ light: colors.yellow[5] }),
      'editorInfo.foreground': pick({ light: colors.blue[5] }),
      'editorHint.foreground': pick({ light: colors.purple[5] }),
      'editorUnnecessaryCode.opacity': opacity(editorForeground, 0.5),

      'editorGutter.modifiedBackground': pick({ light: colors.blue[5] }),
      'editorGutter.addedBackground': pick({ light: colors.green[5] }),
      'editorGutter.deletedBackground': pick({ light: colors.red[5] }),

      'editorWidget.background': pick({ light: colors.gray[1] }),
      'editorWidget.border:': pick({ light: colors.gray[1] }),
      'editorWidget.resizeBorder': pick({ light: colors.blue[5] }),
      'editorSuggestWidget.border': colors.gray[1],
      'editorSuggestWidget.foreground': editorForeground,
      'editorSuggestWidget.highlightForeground': pick({ light: colors.blue[5] }),
      'editorSuggestWidget.selectedBackground': pick({ light: colors.blue[1] }),
      'editorHoverWidget.border': pick({ light: colors.gray[1] }),
      'editorHoverWidget.statusBarBackground': pick({ light: colors.gray[2] }),

      'problemsErrorIcon.foreground': pick({ light: colors.red[5] }),
      'problemsWarningIcon.foreground': pick({ light: colors.yellow[5] }),
      'problemsInfoIcon.foreground': pick({ light: colors.blue[5] }),

      'diffEditor.border': pick({ light: colors.gray[2] }),
      'diffEditor.deletedTextBackground': opacity(pick({ light: colors.red[5] }), 0.3),
      'diffEditor.insertedTextBackground': opacity(pick({ light: colors.green[5] }), 0.3),

      'peekView.border': pick({ light: colors.gray[2] }),
      'peekViewEditor.background': background,
      'peekViewEditor.matchHighlightBackground': opacity(pick({ light: colors.yellow[5] }), 0.5),
      'peekViewResult.background': background,
      'peekViewResult.lineForeground': background,
      'peekViewResult.selectionBackground': background,
      'peekViewResult.selectionForeground': pick({ light: colors.blue[5] }),
      'peekViewTitle.background': pick({ light: colors.gray[1] }),
      'peekViewTitleDescription.foreground': pick({ light: colors.gray[5] }),

      'merge.currentHeaderBackground': pick({ light: opacity(colors.green[5], 0.9) }),
      'merge.currentContentBackground': pick({ light: opacity(colors.green[5], 0.4) }),
      'merge.incomingHeaderBackground': pick({ light: opacity(colors.blue[5], 0.9) }),
      'merge.incomingContentBackground': pick({ light: opacity(colors.blue[5], 0.4) }),

      'panelTitle.activeBorder': pick({ light: colors.blue[5] }),

      'imagePreview.border': pick({ light: colors.gray[2] }),

      'statusBar.foreground': workbenchForeground,
      'statusBar.background': background,
      'statusBar.debuggingForeground': colors.white,
      'statusBar.debuggingBackground': pick({ light: colors.purple[5] }),

      'titleBar.activeForeground': workbenchForeground,
      'titleBar.activeBackground': background,

      'notificationsErrorIcon.foreground': pick({ light: colors.red[5] }),
      'notificationsWarningIcon.foreground': pick({ light: colors.yellow[5] }),
      'notificationsInfoIcon.foreground': pick({ light: colors.blue[5] }),

      'terminal.foreground': editorForeground,
      'terminal.background': background,
      'terminal.selectionBackground': opacity(pick({ light: colors.blue[5] }), 0.3),
      'terminal.ansiBlack': colors.black,
      'terminal.ansiRed': pick({ light: colors.red[5] }),
      'terminal.ansiGreen': pick({ light: colors.green[5] }),
      'terminal.ansiYellow': pick({ light: colors.yellow[5] }),
      'terminal.ansiBlue': pick({ light: colors.blue[5] }),
      'terminal.ansiMagenta': pick({ light: colors.purple[5] }),
      'terminal.ansiCyan': pick({ light: colors.blue[5] }),
      'terminal.ansiWhite': colors.white,
      'terminal.ansiBrightBlack': colors.black,
      'terminal.ansiBrightRed': pick({ light: colors.red[5] }),
      'terminal.ansiBrightGreen': pick({ light: colors.green[5] }),
      'terminal.ansiBrightYellow': pick({ light: colors.yellow[5] }),
      'terminal.ansiBrightBlue': pick({ light: colors.blue[5] }),
      'terminal.ansiBrightMagenta': pick({ light: colors.purple[5] }),
      'terminal.ansiBrightCyan': pick({ light: colors.blue[5] }),
      'terminal.ansiBrightWhite': colors.white,

      'debugExceptionWidget.border': pick({ light: colors.gray[1] }),
      'editor.stackFrameHighlightBackground': opacity(pick({ light: colors.purple[5] }), 0.5),
      'editor.focusedStackFrameHighlightBackground': opacity(pick({ light: colors.purple[5] }), 0.5),
      'debugIcon.breakpointForeground': pick({ light: colors.red[5] }),
      'debugIcon.breakpointDisabledForeground': editorForeground,
      'debugIcon.startForeground': pick({ light: colors.purple[5] }),
      'debugIcon.pauseForeground': pick({ light: colors.purple[5] }),
      'debugIcon.stopForeground': pick({ light: colors.red[5] }),
      'debugIcon.disconnectForeground': pick({ light: colors.red[5] }),
      'debugIcon.restartForeground': pick({ light: colors.purple[5] }),
      'debugIcon.stepOverForeground': pick({ light: colors.purple[5] }),
      'debugIcon.stepIntoForeground': pick({ light: colors.purple[5] }),
      'debugIcon.stepOutForeground': pick({ light: colors.purple[5] }),
      'debugIcon.continueForeground': pick({ light: colors.purple[5] }),
      'debugIcon.stepBackForeground': pick({ light: colors.purple[5] }),
      'debugConsole.infoForeground': pick({ light: colors.purple[5] }),
      'debugConsole.warningForeground': pick({ light: colors.yellow[5] }),
      'debugConsole.errorForeground': pick({ light: colors.red[5] }),
      'debugConsole.sourceForeground': pick({ light: colors.blue[5] }),
      'debugConsoleInputIcon.foreground': pick({ light: colors.blue[5] }),

      'gitDecoration.addedResourceForeground': pick({ light: colors.green[5] }),
      'gitDecoration.modifiedResourceForeground': pick({ light: colors.blue[5] }),
      'gitDecoration.deletedResourceForeground': pick({ light: colors.red[5] }),
      'gitDecoration.stageModifiedResourceForeground': pick({ light: colors.blue[5] }),
      'gitDecoration.stageDeletedResourceForeground': pick({ light: colors.red[5] }),
      'gitDecoration.untrackedResourceForeground': pick({ light: colors.green[5] }),
      'gitDecoration.conflictingResourceForeground': pick({ light: colors.orange[5] }),
      'gitDecoration.submoduleResourceForeground': pick({ light: colors.purple[5] }),

      'breadcrumb.focusForeground': pick({ light: colors.blue[5] }),
      'breadcrumbPicker.background': pick({ light: colors.gray[1] }),

      'charts.foreground': workbenchForeground,
      'charts.lines': pick({ light: colors.blue[5] }),
      'charts.red': pick({ light: colors.red[5] }),
      'charts.blue': pick({ light: colors.blue[5] }),
      'charts.yellow': pick({ light: colors.yellow[5] }),
      'charts.orange': pick({ light: colors.orange[5] }),
      'charts.green': pick({ light: colors.green[5] }),
      'charts.purple': pick({ light: colors.purple[5] })
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: pick({ light: colors.gray[5] })
        }
      },
      {
        scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language'],
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: pick({ light: colors.purple[5] })
        }
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: editorForeground
        }
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: pick({ light: colors.green[5] })
        }
      },
      {
        scope: 'keyword',
        settings: {
          foreground: pick({ light: colors.red[5] })
        }
      },
      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: pick({ light: colors.red[5] })
        }
      },
      {
        scope: ['storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
        settings: {
          foreground: editorForeground
        }
      },
      {
        scope: ['string', 'punctuation.definition.string', 'string punctuation.section.embedded source'],
        settings: {
          foreground: colors.blue[8]
        }
      },
      {
        scope: 'support',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'meta.property-name',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'variable',
        settings: {
          foreground: pick({ light: colors.orange[5] })
        }
      },
      {
        scope: 'variable.other',
        settings: {
          foreground: editorForeground
        }
      },
      {
        scope: ['invalid.broken', 'invalid.deprecated', 'invalid.illegal', 'invalid.unimplemented'],
        settings: {
          fontStyle: 'italic',
          foreground: colors.red[7]
        }
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: colors.red[5] }),
          foreground: editorForeground,
          content: '^M'
        }
      },
      {
        scope: 'message.error',
        settings: {
          foreground: colors.red[7]
        }
      },
      {
        scope: 'string source',
        settings: {
          foreground: editorForeground
        }
      },
      {
        scope: 'string variable',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: colors.blue[8]
        }
      },
      {
        scope: ['string.regexp.character-class', 'string.regexp constant.character.escape', 'string.regexp source.ruby.embedded', 'string.regexp string.regexp.arbitrary-repitition'],
        settings: {
          foreground: colors.blue[8]
        }
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          fontStyle: 'bold',
          foreground: pick({ light: colors.green[5] })
        }
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'support.variable',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: pick({ light: colors.orange[5] })
        }
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: pick({ light: colors.green[5] })
        }
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: editorForeground
        }
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: editorForeground
        }
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: {
          foreground: pick({ light: colors.red[5] }),
          background: colors.red[0]

        }
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: {
          foreground: pick({ light: colors.green[5] }),
          background: colors.green[0]
        }
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          foreground: pick({ light: colors.orange[5] }),
          background: colors.orange[1]
        }
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: colors.gray[1],
          background: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: colors.purple[5] }),
          fontStyle: 'bold'
        }
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: pick({ light: colors.blue[5] })
        }
      },
      {
        scope: ['brackethighlighter.tag', 'brackethighlighter.curly', 'brackethighlighter.round', 'brackethighlighter.square', 'brackethighlighter.angle', 'brackethighlighter.quote'],
        settings: {
          foreground: pick({ light: colors.gray[5] })
        }
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: colors.red[7]
        }
      },
      {
        scope: ['constant.other.reference.link', 'string.other.link'],
        settings: {
          foreground: colors.blue[8],
          fontStyle: 'underline'
        }
      }
    ]
  }
}

module.exports = theme
