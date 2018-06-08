export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_FOOTER = "OPEN_FOOTER";
export const CLOSE_FOOTER = "CLOSE_FOOTER";
export const TOGGLE_FOOTER = "TOGGLE_FOOTER";

export const openModal = (modal) => ({
  type: OPEN_MODAL,
  modal
});

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const openFooter = (footer) => ({
  type: OPEN_FOOTER,
  footer
})

export const closeFooter = () => ({
  type: CLOSE_FOOTER
})

export const toggleFooter = () => ({
  type: TOGGLE_FOOTER
})
