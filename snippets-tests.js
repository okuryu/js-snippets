YUI().use('test-console', function (Y) {
    new Y.Test.Console({
        filters: {
            fail: true,
            info: true,
            pass: true
        }
    }).render('#tests-logger');
    Y.namespace('snippets.tests');
    Y.snippets.tests.testCase = new Y.Test.Case({
        name: 'Snippets Tests',
        setUp: function () {
            this.c1 = document.getElementById('c1');
            this.c2 = document.getElementById('c2');
            this.c3 = document.getElementById('c3');
            this.abc1 = document.getElementById('a-b-c');
            this.abc2 = document.getElementById('a_b_c');
        },
        testSnippets: function () {
            var Assert = Y.Assert;
            Assert.areEqual(getElementsByClassName('a-b-c')[0], this.c1);
            Assert.areEqual(getElementsByClassName('a_b_c')[0], this.c2);
            Assert.areEqual(getElementsByClassName('a')[0], this.c3);
            Assert.areEqual(getElementsByClassName('b')[0], this.c3);
            Assert.areEqual(getElementsByClassName('c')[0], this.c3);
            Assert.areEqual(querySelector('#a-b-c'), this.abc1);
            Assert.areEqual(querySelector('#a_b_c'), this.abc2);
            Assert.areEqual(querySelector('.a-b-c'), this.c1);
            Assert.areEqual(querySelector('.a_b_c'), this.c2);
            Assert.areEqual(querySelector('.a'), this.c3);
            Assert.areEqual(querySelector('.b'), this.c3);
            Assert.areEqual(querySelector('.c'), this.c3);
        }
    });
    Y.Test.Runner.add(Y.snippets.tests.testCase);
    Y.Test.Runner.run();
});
