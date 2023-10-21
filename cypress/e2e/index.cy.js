describe('메인페이지 테스트', () => {
  it('index 페이지 접속시, 메인페이지가 그려지는지 테스트 합니다.', function () {
    cy.visit('/')
    cy.wait(500)
    cy.contains('electrode').should('not.exist')
    cy.get('[data-testid="pokemon-list"]').scrollTo('bottom')
    cy.wait(500)
    cy.contains('electrode').should('exist')
  })
})
