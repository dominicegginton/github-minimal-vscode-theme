'use strict'

const { colors } = require('@primer/primitives')
const opacity = require('hex-color-opacity')

function theme ({ name, style }) {
  const pick = (options) => options[style]

  const workbenchForeground = pick({ light: colors.gray[8], dark: colors.gray[2] })
  const editorForeground = pick({ light: colors.gray[9], dark: colors.gray[1] })

  const background = pick({ light: colors.white, dark: colors.black })

  return {
    name: name,
    type: style,
    colors: {
      focusBorder: pick({ light: colors.white, dark: colors.black }),
      foreground: pick({ light: colors.gray[7], dark: colors.gray[3] }),
      descriptionForeground: colors.gray[5],
      errorForeground: colors.red[6],
      'icon.foreground': colors.blue[6],

      'textBlockQuote.background': background,
      'textBlockQuote.border': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'textCodeBlock.background': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'textLink.activeForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'textLink.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'textPreformat.foreground': pick({ light: colors.gray[5], dark: colors.gray[6] }),
      'textSeparator.foreground': pick({ light: colors.gray[1], dark: colors.gray[9] }),

      'button.background': pick({ light: colors.green[5], dark: colors.green[6] }),
      'button.foreground': pick({ light: colors.white, dark: colors.black }),
      'button.hoverBackground': pick({ light: colors.green[6], dark: colors.green[7] }),
      'button.secondaryBackground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'button.secondaryForeground': pick({ light: colors.white, dark: colors.black }),
      'button.secondaryHoverBackground': pick({ light: colors.blue[6], dark: colors.blue[7] }),
      'checkbox.background': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'checkbox.border': pick({ light: colors.gray[3], dark: colors.gray[7] }),

      'dropdown.background': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'dropdown.listBackground': background,
      'dropdown.border': pick({ light: colors.gray[3], dark: colors.gray[7] }),
      'dropdown.foreground': workbenchForeground,

      'input.background': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'input.border': pick({ light: colors.gray[3], dark: colors.gray[7] }),
      'input.foreground': workbenchForeground,
      'input.placeholderForeground': pick({ light: colors.gray[4], dark: colors.gray[6] }),
      'inputOption.activeBackground': pick({ light: colors.blue[2], dark: colors.blue[8] }),
      'inputOption.activeForeground': workbenchForeground,
      'inputValidation.errorBackground': pick({ light: colors.red[2], dark: colors.red[8] }),
      'inputValidation.errorBorder': pick({ light: colors.red[2], dark: colors.red[8] }),
      'inputValidation.infoBackground': pick({ light: colors.blue[2], dark: colors.blue[8] }),
      'inputValidation.infoBorder': pick({ light: colors.blue[2], dark: colors.blue[8] }),
      'inputValidation.warningBackground': pick({ light: colors.yellow[2], dark: colors.yellow[8] }),
      'inputValidation.warningBorder': pick({ light: colors.yellow[2], dark: colors.yellow[8] }),

      'scrollbar.shadow': pick({ light: colors.white, dark: colors.black }),
      'scrollbarSlider.background': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.4),
      'scrollbarSlider.hoverBackground': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.3),
      'scrollbarSlider.activeBackground': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.3),

      'badge.foreground': pick({ light: colors.white, dark: colors.black }),
      'badge.background': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'progressBar.background': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'list.activeSelectionBackground': background,
      'list.activeSelectionForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'list.inactiveSelectionBackground': background,
      'list.inactiveSelectionForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'list.dropBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.2),
      'list.focusBackground': pick({ light: colors.blue[1], dark: colors.blue[9] }),
      'list.focusForeground': workbenchForeground,
      'list.highlightForeground': workbenchForeground,
      'list.hoverBackground': background,
      'list.hoverForeground': editorForeground,
      'list.inactiveFocusBackground': background,
      'list.invalidItemForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'list.errorForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'list.warningForeground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'listFilterWidget.background': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'listFilterWidget.noMatchesOutline': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'list.filterMatchBackground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'list.filterMatchBorder': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'list.deemphasizedForeground': pick({ light: colors.gray[4], dark: colors.yellow[6] }),

      'tree.indentGuidesStroke': pick({ light: colors.gray[3], dark: colors.gray[7] }),

      'activityBar.background': background,
      'activityBar.foreground': workbenchForeground,
      'activityBar.dropBorder': workbenchForeground,
      'activityBar.inactiveForeground': pick({ light: colors.gray[4], dark: colors.gray[6] }),
      'activityBarBadge.background': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'activityBarBadge.foreground': pick({ light: colors.white, dark: colors.black }),
      'activityBar.activeBorder': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'sideBar.foreground': pick({ light: colors.gray[5], dark: colors.gray[6] }),
      'sideBar.background': background,
      'sideBar.dropBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.2),
      'sideBarTitle.foreground': workbenchForeground,
      'sideBarSectionHeader.foreground': workbenchForeground,
      'sideBarSectionHeader.background': background,

      'minimap.findMatchHighlight': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'minimap.selectionHighlight': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'minimap.errorHighlight': pick({ light: colors.red[5], dark: colors.red[6] }),
      'minimap.warningHighlight': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'minimap.background': background,
      'minimapSlider.background': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.4),
      'minimapSlider.hoverBackground': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.4),
      'minimapSlider.activeBackground': opacity(pick({ light: colors.gray[4], dark: colors.gray[6] }), 0.4),
      'minimapGutter.addedBackground': pick({ light: colors.green[5], dark: colors.green[6] }),
      'minimapGutter.modifiedBackground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'minimapGutter.deletedBackground': pick({ light: colors.red[5], dark: colors.red[6] }),

      'editorGroup.border': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'editorGroup.dropBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.2),
      'editorGroupHeader.noTabsBackground': background,
      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': background,
      'editorGroupHeader.border': background,

      'tab.activeForeground': workbenchForeground,
      'tab.activeBackground': background,
      'tab.inactiveForeground': pick({ light: colors.gray[4], dark: colors.gray[6] }),
      'tab.border': background,
      'tab.activeBorder': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'tab.inactiveBackground': background,
      'tab.hoverForeground': workbenchForeground,
      'tab.unfocusedHoverForeground': workbenchForeground,

      'editor.foreground': editorForeground,
      'editor.background': background,
      'editorCursor.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorLineNumber.foreground': pick({ light: colors.gray[3], dark: colors.gray[7] }),
      'editorLineNumber.activeForeground': editorForeground,
      'editorIndentGuide.background': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'editorIndentGuide.activeBackground': pick({ light: colors.gray[3], dark: colors.gray[7] }),
      'editorCodeLens.foreground': pick({ light: colors.gray[4], dark: colors.gray[6] }),
      'editor.lineHighlightBackground': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editor.selectionBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.3),
      'editor.selectionHighlightBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.2),
      'editor.inactiveSelectionBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.2),
      'editor.findMatchBackground': opacity(pick({ light: colors.yellow[5], dark: colors.yellow[6] }), 0.5),
      'editor.findMatchHighlightBackground': opacity(pick({ light: colors.yellow[5], dark: colors.yellow[6] }), 0.5),
      'editor.findRangeHighlightBackground': opacity(pick({ light: colors.gray[5], dark: colors.gray[6] }), 0.2),
      'editor.hoverHighlightBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.5),
      'editorLink.activeForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorWhitespace.foreground': pick({ light: colors.gray[3], dark: colors.gray[7] }),
      'editorBracketMatch.background': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.1),
      'editorBracketMatch.border': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.1),
      'editor.foldBackground': pick({ light: colors.gray[0], dark: colors.gray[9] }),

      'editorLightBulb.foreground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'editorLightBulbAutoFix.foreground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),

      'editorOverviewRuler.background': background,
      'editorOverviewRuler.border': background,
      'editorOverviewRuler.findMatchForeground': background,
      'editorOverviewRuler.modifiedForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorOverviewRuler.addedForeground': pick({ light: colors.green[5], dark: colors.blue[6] }),
      'editorOverviewRuler.deletedForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'editorOverviewRuler.warningForeground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'editorOverviewRuler.infoForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'editorError.foreground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'editorWarning.foreground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'editorInfo.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorHint.foreground': pick({ light: colors.purple[5], dark: colors.blue[6] }),
      'editorUnnecessaryCode.opacity': opacity(editorForeground, 0.5),

      'editorGutter.modifiedBackground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorGutter.addedBackground': pick({ light: colors.green[5], dark: colors.green[6] }),
      'editorGutter.deletedBackground': pick({ light: colors.red[5], dark: colors.red[6] }),

      'editorWidget.background': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editorWidget.border:': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editorWidget.resizeBorder': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorSuggestWidget.border': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editorSuggestWidget.foreground': editorForeground,
      'editorSuggestWidget.highlightForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'editorSuggestWidget.selectedBackground': pick({ light: colors.blue[1], dark: colors.blue[9] }),
      'editorHoverWidget.border': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editorHoverWidget.statusBarBackground': pick({ light: colors.gray[2], dark: colors.gray[8] }),

      'problemsErrorIcon.foreground': pick({ light: colors.red[5], dark: colors.red[5] }),
      'problemsWarningIcon.foreground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'problemsInfoIcon.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'diffEditor.border': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'diffEditor.deletedTextBackground': opacity(pick({ light: colors.red[5], dark: colors.red[6] }), 0.3),
      'diffEditor.insertedTextBackground': opacity(pick({ light: colors.green[5], dark: colors.green[6] }), 0.3),

      'peekView.border': pick({ light: colors.gray[2], dark: colors.gray[8] }),
      'peekViewEditor.background': background,
      'peekViewEditor.matchHighlightBackground': opacity(pick({ light: colors.yellow[5], dark: colors.yellow[6] }), 0.5),
      'peekViewResult.background': background,
      'peekViewResult.lineForeground': background,
      'peekViewResult.selectionBackground': background,
      'peekViewResult.selectionForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'peekViewTitle.background': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'peekViewTitleDescription.foreground': pick({ light: colors.gray[5], dark: colors.gray[6] }),

      'merge.currentHeaderBackground': opacity(pick({ light: colors.green[5], dark: colors.green[6] }), 0.9),
      'merge.currentContentBackground': opacity(pick({ light: colors.green[5], dark: colors.green[6] }), 0.4),
      'merge.incomingHeaderBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.9),
      'merge.incomingContentBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.4),

      'panelTitle.activeBorder': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'imagePreview.border': pick({ light: colors.gray[2], dark: colors.gray[8] }),

      'statusBar.foreground': workbenchForeground,
      'statusBar.background': background,
      'statusBar.debuggingForeground': colors.white,
      'statusBar.debuggingBackground': pick({ light: colors.purple[5], dark: colors.purple[6] }),

      'titleBar.activeForeground': workbenchForeground,
      'titleBar.activeBackground': background,

      'notificationsErrorIcon.foreground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'notificationsWarningIcon.foreground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'notificationsInfoIcon.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'terminal.foreground': editorForeground,
      'terminal.background': background,
      'terminal.selectionBackground': opacity(pick({ light: colors.blue[5], dark: colors.blue[6] }), 0.3),
      'terminal.ansiBlack': colors.black,
      'terminal.ansiRed': pick({ light: colors.red[5], dark: colors.red[6] }),
      'terminal.ansiGreen': pick({ light: colors.green[5], dark: colors.green[6] }),
      'terminal.ansiYellow': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'terminal.ansiBlue': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'terminal.ansiMagenta': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'terminal.ansiCyan': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'terminal.ansiWhite': colors.white,
      'terminal.ansiBrightBlack': colors.black,
      'terminal.ansiBrightRed': pick({ light: colors.red[5], dark: colors.red[6] }),
      'terminal.ansiBrightGreen': pick({ light: colors.green[5], dark: colors.green[6] }),
      'terminal.ansiBrightYellow': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'terminal.ansiBrightBlue': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'terminal.ansiBrightMagenta': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'terminal.ansiBrightCyan': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'terminal.ansiBrightWhite': colors.white,

      'debugExceptionWidget.border': pick({ light: colors.gray[1], dark: colors.gray[9] }),
      'editor.stackFrameHighlightBackground': opacity(pick({ light: colors.purple[5], dark: colors.purple[6] }), 0.5),
      'editor.focusedStackFrameHighlightBackground': opacity(pick({ light: colors.purple[5], dark: colors.purple[6] }), 0.5),
      'debugIcon.breakpointForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'debugIcon.breakpointDisabledForeground': editorForeground,
      'debugIcon.startForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.pauseForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.stopForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'debugIcon.disconnectForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'debugIcon.restartForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.stepOverForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.stepIntoForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.stepOutForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.continueForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugIcon.stepBackForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugConsole.infoForeground': pick({ light: colors.purple[5], dark: colors.purple[6] }),
      'debugConsole.warningForeground': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'debugConsole.errorForeground': pick({ light: colors.red[5], dark: colors.red[6] }),
      'debugConsole.sourceForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'debugConsoleInputIcon.foreground': pick({ light: colors.blue[5], dark: colors.blue[6] }),

      'gitDecoration.addedResourceForeground': colors.green[5],
      'gitDecoration.modifiedResourceForeground': colors.blue[6],
      'gitDecoration.deletedResourceForeground': colors.red[6],
      'gitDecoration.stageModifiedResourceForeground': colors.blue[6],
      'gitDecoration.stageDeletedResourceForeground': colors.red[6],
      'gitDecoration.untrackedResourceForeground': colors.green[5],
      'gitDecoration.ignoredResourceForeground': colors.gray[4],
      'gitDecoration.conflictingResourceForeground': colors.orange[6],
      'gitDecoration.submoduleResourceForeground': colors.gray[4],

      'breadcrumb.focusForeground': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'breadcrumbPicker.background': pick({ light: colors.gray[1], dark: colors.gray[9] }),

      'charts.foreground': workbenchForeground,
      'charts.lines': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'charts.red': pick({ light: colors.red[5], dark: colors.red[6] }),
      'charts.blue': pick({ light: colors.blue[5], dark: colors.blue[6] }),
      'charts.yellow': pick({ light: colors.yellow[5], dark: colors.yellow[6] }),
      'charts.orange': pick({ light: colors.orange[5], dark: colors.orange[6] }),
      'charts.green': pick({ light: colors.green[5], dark: colors.green[6] }),
      'charts.purple': pick({ light: colors.purple[5], dark: colors.purple[6] })
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: pick({ light: colors.gray[5], dark: colors.gray[4] })
        }
      },
      {
        scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language'],
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: colors.purple[5]
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
          foreground: colors.green[6]
        }
      },
      {
        scope: 'keyword',
        settings: {
          foreground: pick({ light: colors.red[5], dark: colors.red[6] })
        }
      },
      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: pick({ light: colors.red[5], dark: colors.red[6] })
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
          foreground: pick({ light: colors.blue[8], dark: colors.blue[3] })
        }
      },
      {
        scope: 'support',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'meta.property-name',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'variable',
        settings: {
          foreground: colors.orange[6]
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
          background: pick({ light: colors.red[5], dark: colors.red[6] }),
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
          foreground: colors.blue[6]
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
          foreground: colors.green[6]
        }
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'support.variable',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: colors.orange[6]
        }
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: colors.green[6]
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
          foreground: colors.blue[6]
        }
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: {
          foreground: colors.red[7],
          background: colors.red[0]

        }
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: {
          foreground: colors.green[6],
          background: colors.green[0]
        }
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          foreground: colors.orange[6],
          background: colors.orange[1]
        }
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: colors.gray[1],
          background: colors.blue[6]
        }
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: colors.purple[5], dark: colors.purple[6] }),
          fontStyle: 'bold'
        }
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: colors.blue[6]
        }
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: colors.blue[6]
        }
      },
      {
        scope: ['brackethighlighter.tag', 'brackethighlighter.curly', 'brackethighlighter.round', 'brackethighlighter.square', 'brackethighlighter.angle', 'brackethighlighter.quote'],
        settings: {
          foreground: colors.gray[6]
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
